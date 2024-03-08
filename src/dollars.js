// simple jquery-like shorthand for `querySelector`

/**
 * Select one
 */
export function $(selector) {
	return document.querySelector(selector);
}

/**
 * Select many as array 
 */
export function $$(selector) {
	return [...document.querySelectorAll(selector)];
}
