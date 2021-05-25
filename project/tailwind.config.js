module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				myCyan: {
					500: '#5FB4A2',
				},
				myBlue: {
					700: '#203A4C',
				},
				myGrey: {
					100: '#EAEAEB',
					300: '#D7D7D7',
					900: '#33323D',
				},
				myRed: {
					600: '#F43030',
				},
			},
			fontFamily: {
				sans: ['Public Sans', 'sans-serif'],
				serif: ['Ibarra Real Nova', 'serif'],
			},
			fontSize: {
				xs: '15px',
				sm: '16px',
				md: '32px',
				lg: '40px',
				xl: '50px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
