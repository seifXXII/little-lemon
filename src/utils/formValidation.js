/**
 * Form validation utilities for the booking form
 */

/**
 * Validate date - must be today or in the future
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {object} { isValid: boolean, error: string | null }
 */
export const validateDate = (dateString) => {
  if (!dateString) {
    return { isValid: false, error: "Please select a date" };
  }

  const selectedDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    return { isValid: false, error: "Please select a date in the future" };
  }

  return { isValid: true, error: null };
};

/**
 * Validate time - must be selected
 * @param {string} time - Time value
 * @returns {object} { isValid: boolean, error: string | null }
 */
export const validateTime = (time) => {
  if (!time) {
    return { isValid: false, error: "Please select a time" };
  }
  return { isValid: true, error: null };
};

/**
 * Validate number of guests - at least 1 adult required
 * @param {number} adults - Number of adults
 * @param {number} children - Number of children
 * @returns {object} { isValid: boolean, error: string | null }
 */
export const validateGuests = (adults, children) => {
  const numAdults = parseInt(adults, 10);
  const numChildren = parseInt(children, 10);

  if (isNaN(numAdults) || numAdults < 1) {
    return { isValid: false, error: "At least 1 adult is required" };
  }

  const totalGuests = numAdults + numChildren;
  if (totalGuests > 10) {
    return {
      isValid: false,
      error: "Maximum 10 guests allowed per reservation",
    };
  }

  return { isValid: true, error: null };
};

/**
 * Validate entire booking form
 * @param {object} formData - The form data object
 * @returns {object} { isValid: boolean, errors: object }
 */
export const validateBookingForm = (formData) => {
  const errors = {};

  const dateValidation = validateDate(formData.date);
  if (!dateValidation.isValid) {
    errors.date = dateValidation.error;
  }

  const timeValidation = validateTime(formData.time);
  if (!timeValidation.isValid) {
    errors.time = timeValidation.error;
  }

  const guestsValidation = validateGuests(formData.adults, formData.children);
  if (!guestsValidation.isValid) {
    errors.guests = guestsValidation.error;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
