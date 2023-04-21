import { useTouchRipple } from './use-touch-ripple.js';

/**
 * Svelte action to apply a ripple effect to a component.
 * WARNING: Changes the position to relative and overflow to hidden, set styles to false to disable.
 *
 * @param {HTMLElement} node
 * @param {boolean} styles
 * @returns void
 */
export function touchRipple(node, styles = true) {
  if (!node) return;
  if (styles) {
    node.style.position = 'relative';
    node.style.overflow = 'hidden';
  }
  const el = { current: node };

  useTouchRipple(el, true);
}
