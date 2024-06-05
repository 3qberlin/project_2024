const plugin = require('tailwindcss/plugin')

module.exports = {
    content: [
        "./src/**/*",
        "./src/**/*.{html, js, ts, vue}",
    ],
    theme: {
        extend: {
            fontSize: {
                '28px': '1.75rem',
                '32px': '2rem',
                '40px': '2.5rem',
                '48px': '3rem',
                '72px': '4.5rem',
                '1296px': '81rem',
            },
            spacing: {
                '18': '4.5rem',
                '30': '7.5rem',
                '36': '9rem',
            },
            letterSpacing: {
                '12p': '0.12em',
            },
            colors: {
                'primary': {
                    '900': '#000000',
                    '800': '#1E1E1E',
                    '700': '#3B3B3B',
                    '600': '#5B5B5B',
                    '500': '#919191',
                    '400': '#C1C1C1',
                    '300': '#E9E9E9',
                    '200': '#F1F1F1',
                    '100': '#FAFAFA',
                    '50': '#FFFFFF',
                }
            },
            screens: {
                'xl': '1296px',
            },
            backgroundImage:{
                'homepage-work1': "url('https://github.com/hexschool/2024-camp/blob/main/src/assets/images/homepage-work1-bg.png?raw=true')",
                'homepage-work2': "url('https://github.com/hexschool/2024-camp/blob/main/src/assets/images/homepage-work2-lg.png?raw=true')",
                'homepage-work3': "url('https://github.com/hexschool/2024-camp/blob/main/src/assets/images/homepage-work3-bg.png?raw=true')",
                'services': "url('https://github.com/hexschool/2024-camp/blob/main/src/assets/images/homepage-services-bg.png?raw=true')",
                'services-item': "url('https://github.com/hexschool/2024-camp/blob/main/src/assets/images/process-bg.png?raw=true')",
                'homepage-work2-shadow': "url('https://hackmd.io/_uploads/BkyBOfyEC.png')",
                'process': "url('https://github.com/hexschool/2024-camp/blob/main/src/assets/images/process-bg.png?raw=true')",
                'footer': "url('https://github.com/hexschool/2024-camp/blob/main/src/assets/images/footer-bg-lg.png?raw=true')",
            },
        },
    },
    plugins: [
        plugin(function ({ addBase, theme }) {
            addBase({
                'h1': {
                    fontSize: theme('fontSize.4xl'),
                    fontWeight: theme('fontWeight.bold')
                },
                'h2': {
                    fontSize: theme('fontSize.32px'),
                    fontWeight: theme('fontWeight.bold'),
                },
                'h2_ls': {
                    fontSize: theme('fontSize.32px'),
                    fontWeight: theme('fontWeight.bold'),
                    letterSpacing: theme('letterSpacing.12p')
                },
                'h3': {
                    fontSize: theme('fontSize.28px'),
                    fontWeight: theme('fontWeight.bold'),
                },
                'h4': {
                    fontSize: theme('fontSize.2xl'),
                    fontWeight: theme('fontWeight.bold'),
                },
                'h4_normal': {
                    fontSize: theme('fontSize.2xl'),
                },
                'h4_ls': {
                    fontSize: theme('fontSize.2xl'),
                    fontWeight: theme('fontWeight.bold'),
                    letterSpacing: theme('letterSpacing.12p')
                },
                'h5': {
                    fontSize: theme('fontSize.xl'),
                    fontWeight: theme('fontWeight.bold'),
                },
                'h6': {
                    fontSize: theme('fontSize.base'),
                },
            })
        })
    ]
}