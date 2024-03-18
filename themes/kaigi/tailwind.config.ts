/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Built In Detroit Project Contributors. All rights reserved.
 *  Licensed under the MIT License.
 *--------------------------------------------------------------------------------------------*/

import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

const hexToRgb = (hex: string) => {
	hex = hex.replace('#', '');
	hex = hex.length === 3 ? hex.replace(/./g, '$&$&') : hex;
	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);
	return `${r} ${g} ${b}`;
};

const round = (num: number) =>
	num
		.toFixed(7)
		.replace(/(\.[0-9]+?)0+$/, '$1')
		.replace(/\.0$/, '');

const em = (px: number, base: number) => `${round(px / base)}em`;

const rem = (px: number) => `${round(px / 16)}rem`;

export default {
	content: ['./layouts/**/*.html'],
	safelist: [
		{
			pattern: /bg-purple+/,
		},
		{
			pattern: /bg-magenta+/,
		},
		{
			pattern: /bg-green+/,
		},
		{
			pattern: /bg-yellow+/,
		},
		{
			pattern: /bg-orange+/,
		},
		{
			pattern: /bg-cyan+/,
		},
		{
			pattern: /bg-red+/,
		},
		{
			pattern: /bg-blue+/,
		},
		{
			pattern: /bg-teal+/,
		},
		{
			pattern: /chroma+/,
		},
		{
			pattern: /about+/,
		},
	],
	darkMode: 'class',
	theme: {
		screens: {
			sm: '320px', // Small
			md: '672px', // Medium
			lg: '1056px', // Large
			xl: '1312px', // X-Large
			'2xl': '1584px', // Max
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffff',
			black: '#000000',

			/////////
			// Tokens
			/////////

			//////////////
			// Light theme
			//////////////

			// Background
			'light-background': '#ffffff', // Default page background
			'light-background-hover': '#f4f4f4', // Hover color for 'background'
			'light-background-active': '#e8e8e8', // Active color for 'background'
			'light-background-high-contrast': '#393939', // High-contrast backgrounds
			// Layer
			'light-layer-01': '#f4f4f4', // Container color atop 'background'
			'light-layer-hover-01': '#e8e8e8', // Hover color for 'layer-01'
			'light-layer-active-01': '#c6c6c6', // Active color for 'layer-01'
			'light-layer-selected-01': '#e0e0e0', // Selected color for 'layer-01'
			// Border
			'light-border-subtle-00': '#e0e0e0', // Subtle borders atop 'background'
			'light-border-subtle-01': '#c6c6c6', // Subtle borders atop 'layer-01'
			// Text
			'light-text-primary': '#161616', // Primary text, body copy, headers
			'light-text-secondary': '#525252', // Secondary text, input labels, footnotes
			'light-text-tertiary': '#8d8d8d', // Tertiary text, code comments
			'light-text-error': '#da1e28', // Error message text
			// Link
			'light-link-text': '#0066cc',
			// Button
			'light-button-primary': '#0f62fe', // Primary button color
			'light-button-primary-hover': '#0353e9', // Hover color for 'button-primary'
			'light-button-primary-active': '#002d9c', // Active color for 'button-primary'
			'light-button-secondary': '#393939', // Secondary button color
			'light-button-secondary-hover': '#4c4c4c', // Hover color for 'button-secondary'
			'light-button-secondary-active': '#6f6f6f', // Active color for 'button-secondary'
			// Support
			'light-support-info': '#0043ce', // Information

			/////////////
			// Dark theme
			/////////////

			// Background
			'dark-background': '#161616', // Default page background
			'dark-background-hover': '#262626', // Hover color for 'background'
			'dark-background-active': '#333333', // Active color for 'background'
			'dark-background-high-contrast': '#f4f4f4', // High-contrast backgrounds
			// Layer
			'dark-layer-01': '#262626', // Container color atop 'background'
			'dark-layer-hover-01': '#333333', // Hover color for 'layer-01'
			'dark-layer-active-01': '#525252', // Active color for 'layer-01'
			'dark-layer-selected-01': '#393939', // Selected color for 'layer-01'
			// Border
			'dark-border-subtle-00': '#393939', // Subtle borders atop 'background'
			'dark-border-subtle-01': '#525252', // Subtle borders atop 'layer-01'
			// Text
			'dark-text-primary': '#f4f4f4', // Primary text, body copy, headers
			'dark-text-secondary': '#c6c6c6', // Secondary text, input labels, footnotes
			'dark-text-tertiary': '#8d8d8d', // Tertiary text, code comments
			'dark-text-error': '#da1e28', // Error message text
			// Link
			'dark-link-text': '#2997ff',
			// Button
			'dark-button-primary': '#0f62fe', // Primary button color
			'dark-button-primary-hover': '#0353e9', // Hover color for 'button-primary'
			'dark-button-primary-active': '#002d9c', // Active color for 'button-primary'
			'dark-button-secondary': '#6f6f6f', // Secondary button color
			'dark-button-secondary-hover': '#606060', // Hover color for 'button-secondary'
			'dark-button-secondary-active': '#393939', // Active color for 'button-secondary'
			// Support
			'dark-support-info': '#4589ff', // Information

			/////////////////////
			// Main color palette
			/////////////////////

			yellow: {
				100: '#fcf4d6',
				200: '#fddc69',
				300: '#f1c21b',
				400: '#d2a106',
				500: '#b28600',
				600: '#8e6a00',
				700: '#684e00',
				800: '#483700',
				900: '#302400',
				1000: '#1c1500',
			},
			'yellow-hover': {
				100: '#f8e6a0',
				200: '#fccd27',
				300: '#ddb00e',
				400: '#bc9005',
				500: '#9e7700',
				600: '#755800',
				700: '#806000',
				800: '#5c4600',
				900: '#3d2e00',
				1000: '#332600',
			},
			orange: {
				100: '#fff2e8',
				200: '#ffd9be',
				300: '#ffb784',
				400: '#ff832b',
				500: '#eb6200',
				600: '#ba4e00',
				700: '#8a3800',
				800: '#5e2900',
				900: '#3e1a00',
				1000: '#231000',
			},
			'orange-hover': {
				100: '#ffe2cc',
				200: '#ffc69e',
				300: '#ff9d57',
				400: '#fa6800',
				500: '#cc5500',
				600: '#9e4200',
				700: '#a84400',
				800: '#753300',
				900: '#522200',
				1000: '#421e00',
			},
			red: {
				100: '#fff1f1',
				200: '#ffd7d9',
				300: '#ffb3b8',
				400: '#ff8389',
				500: '#fa4d56',
				600: '#da1e28',
				700: '#a2191f',
				800: '#750e13',
				900: '#520408',
				1000: '#2d0709',
			},
			'red-hover': {
				100: '#ffe0e0',
				200: '#ffc2c5',
				300: '#ff99a0',
				400: '#ff6168',
				500: '#ee0713',
				600: '#b81922',
				700: '#c21e25',
				800: '#921118',
				900: '#66050a',
				1000: '#540d11',
			},
			magenta: {
				100: '#fff0f7',
				200: '#ffd6e8',
				300: '#ffafd2',
				400: '#ff7eb6',
				500: '#ee5396',
				600: '#d02670',
				700: '#9f1853',
				800: '#740937',
				900: '#510224',
				1000: '#2a0a18',
			},
			'magenta-hover': {
				100: '#ffe0ef',
				200: '#ffbdda',
				300: '#ff94c3',
				400: '#ff57a0',
				500: '#e3176f',
				600: '#b0215f',
				700: '#bf1d63',
				800: '#8e0b43',
				900: '#68032e',
				1000: '#53142f',
			},
			purple: {
				100: '#f6f2ff',
				200: '#e8daff',
				300: '#d4bbff',
				400: '#be95ff',
				500: '#a56eff',
				600: '#8a3ffc',
				700: '#6929c4',
				800: '#491d8b',
				900: '#31135e',
				1000: '#1c0f30',
			},
			'purple-hover': {
				100: '#ede5ff',
				200: '#dcc7ff',
				300: '#c5a3ff',
				400: '#ae7aff',
				500: '#9352ff',
				600: '#7822fb',
				700: '#7c3dd6',
				800: '#5b24ad',
				900: '#40197b',
				1000: '#341c59',
			},
			blue: {
				100: '#edf5ff',
				200: '#d0e2ff',
				300: '#a6c8ff',
				400: '#78a9ff',
				500: '#4589ff',
				600: '#0f62fe',
				700: '#0043ce',
				800: '#002d9c',
				900: '#001d6c',
				1000: '#001141',
			},
			'blue-hover': {
				100: '#dbebff',
				200: '#b8d3ff',
				300: '#8ab6ff',
				400: '#5c97ff',
				500: '#1f70ff',
				600: '#0050e6',
				700: '#0053ff',
				800: '#0039c7',
				900: '#00258a',
				1000: '#001f75',
			},
			cyan: {
				100: '#e5f6ff',
				200: '#bae6ff',
				300: '#82cfff',
				400: '#33b1ff',
				500: '#1192e8',
				600: '#0072c3',
				700: '#00539a',
				800: '#003a6d',
				900: '#012749',
				1000: '#061727',
			},
			'cyan-hover': {
				100: '#cceeff',
				200: '#99daff',
				300: '#57beff',
				400: '#059fff',
				500: '#0f7ec8',
				600: '#005fa3',
				700: '#0066bd',
				800: '#00498a',
				900: '#013360',
				1000: '#0b2947',
			},
			teal: {
				100: '#d9fbfb',
				200: '#9ef0f0',
				300: '#3ddbd9',
				400: '#08bdba',
				500: '#009d9a',
				600: '#007d79',
				700: '#005d5d',
				800: '#004144',
				900: '#022b30',
				1000: '#081a1c',
			},
			'teal-hover': {
				100: '#acf6f6',
				200: '#57e5e5',
				300: '#25cac8',
				400: '#07aba9',
				500: '#008a87',
				600: '#006b68',
				700: '#007070',
				800: '#005357',
				900: '#033940',
				1000: '#0f3034',
			},
			green: {
				100: '#defbe6',
				200: '#a7f0ba',
				300: '#6fdc8c',
				400: '#42be65',
				500: '#24a148',
				600: '#198038',
				700: '#0e6027',
				800: '#044317',
				900: '#022d0d',
				1000: '#071908',
			},
			'green-hover': {
				100: '#b6f6c8',
				200: '#74e792',
				300: '#36ce5e',
				400: '#3bab5a',
				500: '#208e3f',
				600: '#166f31',
				700: '#11742f',
				800: '#05521c',
				900: '#033b11',
				1000: '#0d300f',
			},
			gray: {
				100: '#f4f4f4',
				200: '#e0e0e0',
				300: '#c6c6c6',
				400: '#a8a8a8',
				500: '#8d8d8d',
				600: '#6f6f6f',
				700: '#525252',
				800: '#393939',
				900: '#262626',
				1000: '#161616',
			},
			'gray-hover': {
				100: '#e8e8e8',
				200: '#d1d1d1',
				300: '#b5b5b5',
				400: '#999999',
				500: '#7a7a7a',
				600: '#5e5e5e',
				700: '#636363',
				800: '#474747',
				900: '#333333',
				1000: '#292929',
			},
			ultramarine: {
				200: '#b0bef3',
				300: '#89a2f6',
				400: '#648fff',
				500: '#3c6df0',
				600: '#3151b7',
				700: '#2e3f8f',
				800: '#252e6a',
				900: '#20214f',
			},
			cerulean: {
				200: '#95c4f3',
				300: '#56acf2',
				400: '#009bef',
				500: '#047cc0',
				600: '#175d8d',
				700: '#1c496d',
				800: '#1d364d',
				900: '#1b2834',
			},
			indigo: {
				200: '#c7b6f7',
				300: '#ae97f4',
				400: '#9b82f3',
				500: '#785ef0',
				600: '#5a3ec8',
				700: '#473793',
				800: '#352969',
				900: '#272149',
			},
			aqua: {
				200: '#71cddd',
				300: '#00b6cb',
				400: '#12a3b4',
				500: '#188291',
				600: '#17616b',
				700: '#164d56',
				800: '#13393e',
				900: '#122a2e',
			},
		},
		fontFamily: {
			sans: [
				'ui-sans-serif',
				'system-ui',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
			serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
			mono: [
				'"IBM Plex Mono"',
				'ui-monospace',
				'SFMono-Regular',
				'Menlo',
				'Monaco',
				'Consolas',
				'"Liberation Mono"',
				'"Courier New"',
				'monospace',
			],
			headings: [
				'"IBM Plex Sans"',
				'ui-sans-serif',
				'system-ui',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
			blockquotes: [
				'"IBM Plex Sans"',
				'ui-sans-serif',
				'system-ui',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
		},
		extend: {
			gridTemplateColumns: {
				'16': 'repeat(16, minmax(0, 1fr))',
			},
			gridColumn: {
				'span-13': 'span 13 / span 13',
				'span-15': 'span 15 / span 15',
				'span-16': 'span 16 / span 16',
			},
			gridColumnEnd: {
				'17': '17',
			},
			transitionDuration: {
				'fast-01': '70ms', // Buttons and toggles
				'moderate-01': '150ms', // Small expansions, short distance movements
				'moderate-02': '240ms', // System communications, toasts
				'slow-01': '400ms', // Large expansions
				'slow-02': '700ms', // Background transition
			},
			transitionTimingFunction: {
				DEFAULT: 'cubic-bezier(0.2, 0.2, 0.38, 0.9)',
				linear: 'linear',
				in: 'cubic-bezier(0.2, 0, 1, 0.9)',
				out: 'cubic-bezier(0, 0, 0.38, 0.9)',
				'in-out': 'cubic-bezier(0.2, 0.2, 0.38, 0.9)',
			},
			typography: ({ theme }) => ({
				DEFAULT: {
					css: [
						{
							strong: {
								fontWeight: '700',
							},
							h1: {
								fontWeight: '700',
								fontFamily: 'theme(fontFamily.headings)',
							},
							h2: {
								fontWeight: '700',
								fontFamily: 'theme(fontFamily.headings)',
							},
							h3: {
								fontWeight: '700',
								fontFamily: 'theme(fontFamily.headings)',
							},
							h4: {
								fontWeight: '700',
								fontFamily: 'theme(fontFamily.headings)',
							},
							thead: {
								borderBottomWidth: '2px',
							},
							'thead th': {
								fontWeight: '700',
								verticalAlign: 'bottom',
							},
							'thead th:first-child': {
								paddingLeft: '0',
							},
							'thead th:last-child': {
								paddingRight: '0',
							},
							'tbody td:first-child, tfoot td:first-child': {
								paddingLeft: '0',
							},
							'tbody td:last-child, tfoot td:last-child': {
								paddingRight: '0',
							},
							'tbody td, tfoot td': {
								verticalAlign: 'middle',
							},
							blockquote: {
								fontWeight: '700',
								fontStyle: 'normal',
								fontFamily: 'theme(fontFamily.blockquotes)',
								borderLeftWidth: '0.25rem',
								quotes: '"\\201C""\\201D""\\2018""\\2019"',
							},
							'blockquote p:first-of-type::before': {
								content: '',
							},
							'blockquote p:last-of-type::after': {
								content: '',
							},
							ul: {
								listStyleType: 'square',
							},
							code: {
								fontWeight: '700',
							},
							'code::before': {
								content: '',
							},
							'code::after': {
								content: '',
							},
						},
					],
				},
				base: {
					css: [
						{
							lineHeight: round(24 / 16),
							p: {
								marginTop: em(16, 16),
								marginBottom: em(16, 16),
							},
							h1: {
								fontSize: em(60, 16),
								marginTop: '0',
								marginBottom: em(60, 60),
								lineHeight: rem(70),
							},
							h2: {
								fontSize: em(32, 16),
								marginTop: em(64, 32),
								marginBottom: em(32, 32),
								lineHeight: rem(40),
							},
							h3: {
								fontSize: em(24, 16),
								marginTop: em(36, 24),
								marginBottom: em(24, 24),
								lineHeight: rem(28),
							},
							h4: {
								fontSize: em(24, 16),
								marginTop: em(36, 24),
								marginBottom: em(24, 24),
								lineHeight: rem(28),
							},
							pre: {
								fontSize: em(16, 16),
								lineHeight: round(24 / 16),
								marginTop: em(16, 16),
								marginBottom: em(16, 16),
								borderRadius: '0',
								paddingTop: em(16, 16),
								paddingRight: em(16, 16),
								paddingBottom: em(16, 16),
								paddingLeft: em(16, 16),
							},
							ol: {
								marginTop: em(16, 16),
								marginBottom: em(16, 16),
								paddingLeft: em(24, 16),
							},
							ul: {
								marginTop: em(16, 16),
								marginBottom: em(16, 16),
								paddingLeft: em(24, 16),
							},
							table: {
								fontSize: em(16, 16),
								lineHeight: round(24 / 16),
							},
							code: {
								fontSize: rem(16),
							},
							'thead th': {
								paddingRight: em(14, 14),
								paddingBottom: em(8, 14),
								paddingLeft: em(14, 14),
							},
							'tbody td, tfoot td': {
								paddingTop: em(14, 14),
								paddingRight: em(14, 14),
								paddingBottom: em(14, 14),
								paddingLeft: em(14, 14),
							},
							blockquote: {
								marginTop: em(20, 20),
								marginBottom: em(20, 20),
								paddingTop: em(10, 20),
								paddingRight: em(20, 20),
								paddingBottom: em(10, 20),
								paddingLeft: em(20, 20),
							},
						},
					],
				},
				gray: {
					css: {
						/////////////////////////////////
						// Custom properties (Gray style)
						/////////////////////////////////

						//////////////
						// Light theme
						//////////////

						'--tw-prose-body': theme('colors.light-text-primary'),
						'--tw-prose-body-secondary': theme('colors.light-text-secondary'),
						'--tw-prose-headings': theme('colors.light-text-primary'),
						'--tw-prose-lead': theme('colors.gray[600]'),
						'--tw-prose-links': theme('colors.light-link-text'),
						'--tw-prose-bold': theme('colors.gray[900]'),
						'--tw-prose-counters': theme('colors.light-text-primary'),
						'--tw-prose-bullets': theme('colors.light-text-primary'),
						'--tw-prose-hr': theme('colors.gray[200]'),
						'--tw-prose-quotes': theme('colors.light-text-primary'),
						'--tw-prose-quote-borders': theme('colors.light-support-info'),
						'--tw-prose-quote-bg': theme('colors.blue[100]'),
						'--tw-prose-captions': theme('colors.gray[500]'),
						'--tw-prose-kbd': theme('colors.gray[900]'),
						'--tw-prose-kbd-shadows': hexToRgb(theme('colors.gray[900]')),
						'--tw-prose-code': theme('colors.gray[900]'),
						'--tw-prose-pre-code': theme('colors.gray[200]'),
						'--tw-prose-pre-bg': theme('colors.light-layer-01'),
						'--tw-prose-th-borders': theme('colors.black'),
						'--tw-prose-td-borders': theme('colors.black'),

						/////////////
						// Dark theme
						/////////////

						'--tw-prose-invert-body': theme('colors.dark-text-primary'),
						'--tw-prose-invert-body-secondary': theme('colors.dark-text-secondary'),
						'--tw-prose-invert-headings': theme('colors.dark-text-primary'),
						'--tw-prose-invert-lead': theme('colors.gray[400]'),
						'--tw-prose-invert-links': theme('colors.dark-link-text'),
						'--tw-prose-invert-bold': theme('colors.white'),
						'--tw-prose-invert-counters': theme('colors.dark-text-primary'),
						'--tw-prose-invert-bullets': theme('colors.dark-text-primary'),
						'--tw-prose-invert-hr': theme('colors.gray[700]'),
						'--tw-prose-invert-quotes': theme('colors.dark-text-primary'),
						'--tw-prose-invert-quote-borders': theme('colors.dark-support-info'),
						'--tw-prose-invert-quote-bg': theme('colors.gray[900]'),
						'--tw-prose-invert-captions': theme('colors.gray[400]'),
						'--tw-prose-invert-kbd': theme('colors.white'),
						'--tw-prose-invert-kbd-shadows': hexToRgb(theme('colors.white')),
						'--tw-prose-invert-code': theme('colors.white'),
						'--tw-prose-invert-pre-code': theme('colors.gray[300]'),
						'--tw-prose-invert-pre-bg': theme('colors.dark-layer-01'),
						'--tw-prose-invert-th-borders': theme('colors.white'),
						'--tw-prose-invert-td-borders': theme('colors.gray[800]'),

						//////////////////////////
						// Default element styling
						//////////////////////////

						strong: {
							color: 'var(--tw-prose-bold)',
						},
						h1: {
							color: 'var(--tw-prose-headings)',
						},
						h2: {
							color: 'var(--tw-prose-headings)',
						},
						h3: {
							color: 'var(--tw-prose-headings)',
						},
						h4: {
							color: 'var(--tw-prose-headings)',
						},
						thead: {
							borderBottomColor: 'var(--tw-prose-th-borders)',
						},
						'thead th': {
							color: 'var(--tw-prose-headings)',
						},
						'td span': {
							color: 'var(--tw-prose-body-secondary)',
						},
						'code span': {
							color: 'var(--tw-prose-body)',
						},
						'pre code': {
							color: 'var(--tw-prose-body)',
						},
						blockquote: {
							background: 'var(--tw-prose-quote-bg)',
							borderLeftColor: 'var(--tw-prose-quote-borders)',
							color: 'var(--tw-prose-quotes)',
						},
						code: {
							color: 'var(--tw-prose-code)',
						},
					},
				},
				invert: {
					css: {
						'--tw-prose-body': 'var(--tw-prose-invert-body)',
						'--tw-prose-body-secondary': 'var(--tw-prose-invert-body-secondary)',
						'--tw-prose-headings': 'var(--tw-prose-invert-headings)',
						'--tw-prose-lead': 'var(--tw-prose-invert-lead)',
						'--tw-prose-links': 'var(--tw-prose-invert-links)',
						'--tw-prose-bold': 'var(--tw-prose-invert-bold)',
						'--tw-prose-counters': 'var(--tw-prose-invert-counters)',
						'--tw-prose-bullets': 'var(--tw-prose-invert-bullets)',
						'--tw-prose-hr': 'var(--tw-prose-invert-hr)',
						'--tw-prose-quotes': 'var(--tw-prose-invert-quotes)',
						'--tw-prose-quote-borders': 'var(--tw-prose-invert-quote-borders)',
						'--tw-prose-quote-bg': 'var(--tw-prose-invert-quote-bg)',
						'--tw-prose-captions': 'var(--tw-prose-invert-captions)',
						'--tw-prose-kbd': 'var(--tw-prose-invert-kbd)',
						'--tw-prose-kbd-shadows': 'var(--tw-prose-invert-kbd-shadows)',
						'--tw-prose-code': 'var(--tw-prose-invert-code)',
						'--tw-prose-pre-code': 'var(--tw-prose-invert-pre-code)',
						'--tw-prose-pre-bg': 'var(--tw-prose-invert-pre-bg)',
						'--tw-prose-th-borders': 'var(--tw-prose-invert-th-borders)',
						'--tw-prose-td-borders': 'var(--tw-prose-invert-td-borders)',
					},
				},
			}),
		},
	},
	plugins: [typography],
} satisfies Config;
