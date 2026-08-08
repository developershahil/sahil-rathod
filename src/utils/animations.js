/**
 * animations.js — Animation helper utilities
 */

/**
 * Returns a CSS transition-delay string for staggered animations.
 * @param {number} index - Item index in a list (0-based)
 * @param {number} baseDelay - Base delay in ms (default 80)
 * @returns {string} CSS delay value e.g. "0.24s"
 */
export const staggerDelay = (index, baseDelay = 80) =>
  `${(index * baseDelay) / 1000}s`;

/**
 * Builds inline style object with stagger transition-delay.
 */
export const staggerStyle = (index, baseDelay = 80) => ({
  transitionDelay: staggerDelay(index, baseDelay),
});

/**
 * Clamps a value between min and max.
 */
export const clamp = (value, min, max) =>
  Math.min(Math.max(value, min), max);
