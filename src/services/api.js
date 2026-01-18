/**
 * API service for Bhol backend
 */

import { config } from './config';

/**
 * Submit feedback/support request to the API
 * @param {object} params
 * @param {string} params.name - User's name
 * @param {string} params.email - User's email
 * @param {string} params.message - Support message
 * @param {string} params.turnstileToken - Turnstile verification token
 * @returns {Promise<{ success: boolean, feedbackId?: string, error?: string }>}
 */
export async function submitFeedback({ name, email, message, turnstileToken }) {
  if (!config.apiUrl) {
    throw new Error('API not configured. Please email us at hello@bhol.app');
  }

  // Format message to include name and email since 'general' source doesn't have those fields
  const formattedMessage = `[Website Support]\nName: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`;

  const response = await fetch(`${config.apiUrl}/api/feedback`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(config.appSecret && { 'X-App-Secret': config.appSecret })
    },
    body: JSON.stringify({
      source: 'general',
      message: formattedMessage,
      appVersion: 'web-1.0.0',
      osVersion: 'web',
      deviceModel: 'browser',
      userId: email.trim(),
      turnstileToken: turnstileToken || undefined
    })
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.error || 'Failed to send message');
  }

  return result;
}

const api = { submitFeedback };
export default api;
