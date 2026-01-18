import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook for Cloudflare Turnstile integration
 * @param {string} siteKey - The Turnstile site key
 * @param {object} options - Optional configuration
 * @returns {object} - { token, ref, reset, isReady }
 */
export function useTurnstile(siteKey, options = {}) {
  const [token, setToken] = useState('');
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);

  const reset = useCallback(() => {
    setToken('');
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
    }
  }, []);

  useEffect(() => {
    if (!siteKey || !containerRef.current) return;

    // Wait for Turnstile script to load
    const initTurnstile = () => {
      if (!window.turnstile) {
        // Retry after a short delay if not loaded yet
        const timeout = setTimeout(initTurnstile, 100);
        return () => clearTimeout(timeout);
      }

      // Clean up any existing widget
      if (widgetIdRef.current) {
        window.turnstile.remove(widgetIdRef.current);
      }

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: (newToken) => {
          setToken(newToken);
          setIsReady(true);
        },
        'expired-callback': () => setToken(''),
        'error-callback': () => setToken(''),
        theme: options.theme || 'light',
        ...options,
      });

      setIsReady(true);
    };

    initTurnstile();

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, [siteKey, options]);

  return {
    token,
    ref: containerRef,
    reset,
    isReady,
    isVerified: Boolean(token),
  };
}

export default useTurnstile;
