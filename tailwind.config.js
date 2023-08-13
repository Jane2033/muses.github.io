/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
      'Noto Sans': ['Noto Sans TC', 'sans-serif'],
      'funkydori': ['funkydori', 'sans-serif'],
      'quiche': ['quiche-sans', 'sans-serif'],
    },
    extend: {
      colors: {
        purple: {
          350: '#B7A8D7',
        },
        pink: {
          25: '#FFF6F6',
          450: '#D47F9E',
          550: '#F14D8D',
        },
        blue: {
          150: '#D3E2F7',
        },
      },
      spacing: {
        '85vh': '85vh',
        '110vh': '110vh',
        '150vh': '150vh',
        '200vh': '200vh',
        '250vh': '250vh',
        '300vh': '300vh',
        '500vh': '500vh',
        '120%': '120%',
        '10%': '10%',
        '15%': '15%',
      },
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 0.5fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      borderRadius:{
        'large': '40px',
      },
      rotate: {
        '60': '60deg',
      },
      zIndex: {
        '1': '1',
      },
      backgroundImage: {
        'bags': "url('/src/img/bags.jpg')",
        'clothes': "url('/src/img/clothes.png')",
        'acc': "url('/src/img/acc.png')",
        'bg1': "url('/src/img/bg_1.png')",
      }
    },
  },
  plugins: [],
}