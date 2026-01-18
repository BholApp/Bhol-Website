/**
 * Validation utilities
 */

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validate email format
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
  return EMAIL_REGEX.test(email);
}

/**
 * Validate required string field
 * @param {string} value
 * @returns {boolean}
 */
export function isNotEmpty(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

/**
 * Validate support form data
 * @param {object} formData - { name, email, message }
 * @returns {{ isValid: boolean, error?: string }}
 */
export function validateSupportForm(formData) {
  if (!isNotEmpty(formData.name)) {
    return { isValid: false, error: 'Please enter your name.' };
  }

  if (!isValidEmail(formData.email)) {
    return { isValid: false, error: 'Please enter a valid email address.' };
  }

  if (!isNotEmpty(formData.message)) {
    return { isValid: false, error: 'Please enter a message.' };
  }

  return { isValid: true };
}

const validation = { isValidEmail, isNotEmpty, validateSupportForm };
export default validation;
