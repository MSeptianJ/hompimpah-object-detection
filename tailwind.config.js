/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			teal: {
				100: '#ccedf7',
				200: '#99dbef',
				300: '#66c8e8',
				400: '#33b6e0',
				500: '#00a4d8',
				600: '#0083ad',
				700: '#006282',
				800: '#004256',
				900: '#00212b',
			},
		},
	},
	plugins: [],
};
