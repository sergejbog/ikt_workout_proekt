/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					lightest: '#4a6fa5',
					lighter: '#2f507d',
					DEFAULT: '#1D3557',
					darker: '#14243c',
					darkest: '#0a1220'
				},
				secondary: {
					lightest: '#b5cbe0',
					lighter: '#7299b7',
					DEFAULT: '#457B9D',
					darker: '#315673',
					darkest: '#1c3247'
				},
				accent: {
					lightest: '#e1f2f5',
					lighter: '#c1e2e9',
					DEFAULT: '#A8DADC',
					darker: '#75a3a5',
					darkest: '#41656e'
				},
				highlight: {
					lightest: '#f7a3a9',
					lighter: '#ef666c',
					DEFAULT: '#E63946',
					darker: '#a62932',
					darkest: '#65191f'
				},
				notification: {
					lightest: '#fdfdfd',
					lighter: '#f8f8f8',
					DEFAULT: '#F1FAEE',
					darker: '#acb4af',
					darkest: '#666c68'
				},
				text: {
					lightest: '#4d4d4d',
					lighter: '#404040',
					DEFAULT: '#333333',
					darker: '#262626',
					darkest: '#1a1a1a'
				},
				background: {
					lightest: '#fafafa',
					lighter: '#f0f0f0',
					DEFAULT: '#F5F5F5',
					darker: '#d1d1d1',
					darkest: '#a3a3a3'
				},
				white: {
					DEFAULT: '#F3F3F3'
				}
			}
		}
	},
	plugins: []
};
