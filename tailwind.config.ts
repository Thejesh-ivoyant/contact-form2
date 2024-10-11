import type { Config } from 'tailwindcss'
export default {
    mode: "jit",
    content: ['./app/**/*.{js,jsx,ts,tsx}'],
    variants: {
        display: ['responsive', 'group-hover', 'group-focus'],
    },
    theme: {
        extend: {
            colors: {
                grape: '#5D3F9C',
                'grape-100': '#7741E8',
                'haiti': '#1B0740',
                'light': '#f3f4fe33',
                'grape-dark': '#02041833',
                'head-grape': '#433C4A',
                'geekblue': '#85A5FF',
                'geekblue-2': '#D6E4FF',
                'HeaderGray': '#E9E9EC',
                'TinBlue': '#EEEBFF',
                'PurpBlue': "#0D0B71",
                'iv-purple': '#969AFB',
                'form-gray': '#7D7890',
                'form-border': '#0D0D16',
                'nav-dark': '#1C0F38',
                'slate': '#F9F8FC',
                'light-indigo': '#7A4BD3',
                'link-pink': '#E0D4FF',
                'light-brown': '#4B4851',
                'title-black': '#0B021D'
            },
            fontFamily: {
                poppins: ['Poppins'],
                montserrat: ['Montserrat'],
                mplus: ['Mplus 1p', 'sans-serif'],
                notosans: ['Noto Sans', 'sans-serif']
            }
        },
    },
    plugins: [],
} satisfies Config
