/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				fadeIn: 'fadeIn .5s ease-in-out forwards',
			}	
		},
		colors: {
			'primary': {
				'50': '#ffffff',
				'100': '#efefef',
				'200': '#dcdcdc',
				'300': '#bdbdbd',
				'400': '#989898',
				'500': '#7c7c7c',
				'600': '#656565',
				'700': '#525252',
				'800': '#464646',
				'900': '#3d3d3d',
				'950': '#292929',
			},						
		}
	},
	plugins: [require('@tailwindcss/typography'),],
}
