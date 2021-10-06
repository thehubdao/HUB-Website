module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      inset: {
        '1/5': '20%',
        '1/6': '10%'
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      inset: {
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem'
      },
      height: {
        '18': '4.5rem'
      },
      scale: {
        '55': '.55',
        '60': '.6',
        '65': '.65',
        '85': '.85',
        '115': '1.15',
        '120': '1.2'
      },
      rotate: {
        '44': '68.4deg',
        '12': '183.6deg',
        '24': '226.8deg'
      },
      padding: {
        '1/2': '50%'
      },
      transitionProperty: {
        'visibility': 'visibility'
      },
      boxShadow: {
        round: '0 0px 30px -15px rgba(0, 0, 0, 0.25)',
        color: '0 0px 20px 0px rgba(250, 250, 250, 0.5)',
        colorbottom: '0 0px 40px 0px rgba(250, 250, 250, 0.1)',
        button: '0 0px 8px 0px rgba(250, 250, 250, 0.4)',
        black: '0 0px 40px 0px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        // 'sans': ['Quicksand', 'sans-serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'xxs': '0.5rem'
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      padding: {
        full: '100%'
      },
      backgroundImage:  {
        'hero-pattern': "url('/public/images/pool_punk.png')",
      },
      colors: {
        grey: {
          darkest: '#101010',
          dark: '#3c4858',
          DEFAULT: '#c0ccda',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        }
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
      backgroundImage: ['hover'],
      grayscale: ['hover'],
      zIndex: ['hover'],
      opactiy: ['last'],
      backgroundColor: ['checked']
    },
  },
  plugins: [],
}
