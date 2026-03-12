/**
 * Funções utilitárias para o portfólio
 */

/**
 * Clamp valor entre min e max
 */
export const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Lerp - interpolação linear
 */
export const lerp = (start, end, t) => {
  return start + (end - start) * t;
};

/**
 * Throttle function - Limita frequência de execução
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Debounce function - Aguarda para executar
 */
export const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};
