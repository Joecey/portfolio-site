import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                myTheme: {
                    text: '#120803',
                    background: '#fffaeb',
                    primary: '#ff8400',
                    secondary: '#ffcbab',
                    accent: '#803054',
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
    plugins: [],
}
