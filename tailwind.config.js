module.exports = {
    theme: {
        extend: {
            fontFamily: {
                heading: ['Abril Fatface', 'serif'],
                body: ['Merriweather', 'sans-serif'],
                utility: ['Cabin', 'monospace'],
                nav: ['Lato', 'sans-serif'],
                num: ['Roboto Condensed', 'sans-serif'],

            },
            // fontFamily: {
            //     heading: ['Inter', 'serif'],
            //     body: ['Space Grotesk', 'sans-serif'],
            //     utility: ['Poppins', 'sans-serif'],
            // },
            // fontFamily: {
            //     heading: ['Playfair Display', 'serif'],
            //     body: ['Lato', 'sans-serif'],
            //     utility: ['Roboto Mono', 'sans-serif'],
            // },
            fontSize: {
                'xs': [
                    '0.75rem', // 12px (mobile)
                    {
                        lineHeight: '1.5',
                        letterSpacing: '0.05em',
                        md: '0.8125rem', // 13px (768px+)
                        lg: '0.875rem'  // 14px (1024px+)
                    }
                ],
                'sm': [
                    '0.875rem', // 14px
                    {
                        lineHeight: '1.6',
                        letterSpacing: '0.03em',
                        md: '0.9375rem', // 15px
                        lg: '1rem'       // 16px
                    }
                ],
                'base': [
                    '1rem', // 16px
                    {
                        lineHeight: '1.7',
                        letterSpacing: '0.02em',
                        md: '1.0625rem', // 17px
                        lg: '1.125rem'   // 18px
                    }
                ],
                'lg': [
                    '1.125rem', // 18px
                    {
                        lineHeight: '1.6',
                        letterSpacing: '0.01em',
                        md: {
                            size: '1.25rem',  // 20px
                            lineHeight: '1.5'
                        },
                        lg: {
                            size: '1.375rem', // 22px
                            lineHeight: '1.5'
                        }
                    }
                ],
                'xl': [
                    '1.25rem', // 20px
                    {
                        lineHeight: '1.5',
                        md: {
                            size: '1.5rem',   // 24px
                            lineHeight: '1.4'
                        },
                        lg: {
                            size: '1.75rem',  // 28px
                            lineHeight: '1.35'
                        }
                    }
                ],
                '2xl': [
                    '1.5rem', // 24px
                    {
                        lineHeight: '1.4',
                        md: {
                            size: '1.875rem', // 30px
                            lineHeight: '1.3'
                        },
                        lg: {
                            size: '2.25rem',  // 36px
                            lineHeight: '1.25'
                        }
                    }
                ],
                '3xl': [
                    '1.875rem', // 30px
                    {
                        lineHeight: '1.3',
                        md: {
                            size: '2.25rem', // 36px
                            lineHeight: '1.25'
                        },
                        lg: {
                            size: '2.5rem',   // 40px
                            lineHeight: '1.2'
                        }
                    }
                ],
                '4xl': [
                    '2.25rem', // 36px
                    {
                        lineHeight: '1.2',
                        md: {
                            size: '3rem',     // 48px
                            lineHeight: '1.1'
                        },
                        lg: {
                            size: '3.5rem',   // 56px
                            lineHeight: '1'
                        }
                    }
                ]
            },
            colors: {
                primary: '#76795B',
                background: '#F5F5F5',
                accent: '#B8C2A1',      // 新增辅助色
                text: '#333333'         // 新增正文色
            }
        }
    }
}