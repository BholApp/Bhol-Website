/**
 * Application configuration from environment variables
 */

export const config = {
  waitlistScriptUrl: process.env.REACT_APP_WAITLIST_SCRIPT_URL || '',
  apiUrl: process.env.REACT_APP_API_URL || '',
  appSecret: process.env.REACT_APP_APP_SECRET || '',
  turnstileSiteKey: process.env.REACT_APP_TURNSTILE_SITE_KEY || '',
};

export default config;
