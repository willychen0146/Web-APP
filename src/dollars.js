// simple jquery-like shorthand for `querySelector`

/**
 * Select one element.
 *
 * @param {HTMLElement} element
 * @param {string} [selector]
 */
export function $(element, selector) {
	if (typeof element == "string" && selector === undefined) {
		selector = element;
		element = document;
	}
	return element.querySelector(selector);
}

/**
 * Select many as array.
 *
 * @param {HTMLElement} element
 * @param {string} [selector]
 */
export function $$(element, selector) {
	if (typeof element == "string" && selector === undefined) {
		selector = element;
		element = document;
	}
	return [...element.querySelectorAll(selector)];
}

/**
 * Alias of Document.createElement.
 */
export function $$$(tagName, options) {
  return document.createElement(tagName, options)
}

// Add `on` alias for `addEventListener`, its too long 🥵🥵🥵
EventTarget.prototype.on = EventTarget.prototype.addEventListener;
