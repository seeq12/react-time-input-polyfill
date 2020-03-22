
import { loadJS } from 'time-input-polyfill-utils/common'

let polyfillLoadCalled = false

export const loadPolyfill = (onPolyfillLoad: Function) => {
	if (polyfillLoadCalled) return null
	polyfillLoadCalled = true

	// TO DO: set up a Gulp function in the utils project to generate the polyfill package
	loadJS('https://cdn.jsdelivr.net/npm/time-input-polyfill-utils@1',
		() => {
			//TO DO: Import the Window type to fix this error after releasing another beta release of the utils
			onPolyfillLoad(window.timeInputPolyfillUtils)
		},
	)
}
