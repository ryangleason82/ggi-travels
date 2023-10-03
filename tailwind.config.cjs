/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		backgroundImage: {
			"landing": "url('/assets/landing.jpg')"
		},
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
}
