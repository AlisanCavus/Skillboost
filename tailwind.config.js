/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brandPrimary: '#F46A3D', // Primary brand color
        brandPrimarySoft: '#FA9847', // Soft variation of primary brand color
        brandSecondary: '#2B3642', // Secondary brand color
        brandBackground: '#F8F9FA', // Background color
        brandGreyDark: '#D6D7D9', // Dark grey color
        brandGreyLight: '#F4F5F6', // Light grey color
        brandGrey40: '#ABAFB2', // 40% grey color
        brandGrey70: '#6D727B', // 70% grey color
        brandBlueEdit: '#D8E2ED', // Blue color used for editing
        brandPrimary10: '#EAEBEC', // 10% variation of primary brand color
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        linkusShadow: '0px 1px 5px rgba(0, 0, 0, 0.15)',
        linkusLargeShadow: '0px 8px 35px rgba(0,0,0,0.16)',
        inputShadow: '0px 1px 10px rgba(0,0,0,0.1)',
        linkusRegularShadow: '0px 4px 10px rgba(0,0,0,0.12)',
        linkusButton: '0px 1px 3px rgba(0,0,0,0.2)',
      },
      height: {
        px7: '7px',
      },
      width: {
        px41: '41px',
      },
      borderWidth: {
        px1: '1px',
      },
      transitionDuration: {
        50: '50ms',
      },
      lineHeight: {
        px24: '24px',
        px28: '28px',
        px32: '32px',
        px36: '36px',
        px40: '40px',
        px44: '44px',
        px48: '48px',
      },
      height: {
        px7: '7px',
        px41: '41px',
      },
      backgroundImage: {},
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
