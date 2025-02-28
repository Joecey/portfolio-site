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
    plugins: [require('tailwindcss-motion')],
}
