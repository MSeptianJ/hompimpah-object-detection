/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

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
		fontFamily: {
			sans: ['Inter Var', ...defaultTheme.fontFamily.sans],
		},
		extend: {
			colors: {
				backColor: '#ffffff',
				primaryColor: '#14213D',
				secondaryColor: '#192E5A',
				accentColor: '#FCA311',
			},
		},
	},
	plugins: [],
};
