import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.jsx'],
	theme: {
		extend: {},
	},
	plugins: [daisyui],
	daisyui: {
		themes: ['light'],
	},
}
