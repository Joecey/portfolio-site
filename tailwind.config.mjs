import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            animation: {
                float: 'float 3s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(10px) ' },
                    '50%': { transform: 'translateY(0px)' },
                },
            },

            colors: {
                myTheme: {
                    text: '#120803',
                    background: '#fffaeb',
                    primary: '#803054',
                    secondary: '#ffcbab',
                    accent: '#ff8400',
                },
            },
            fontFamily: {
                body: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
                heading: ['Young Serif', ...defaultTheme.fontFamily.serif],
            },
        },
        fontWeight: {
            normal: '400',
            bold: '700',
        },
    },
    plugins: [require('tailwindcss-animate')],
}
