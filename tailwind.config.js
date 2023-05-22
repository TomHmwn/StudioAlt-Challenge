/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

      },
      fontFamily: {
        AKLight: ['AktivGrotesk-Light'],
        AKRegular: ['AktivGrotesk-Regular'],
        AKMedium: ['AktivGrotesk-Medium'],
        AKBold: ['AktivGrotesk-Bold'],
        MorLight: ['Morion-Light'],
        MorRegular: ['Morion-Regular'],
        MorUltraLight: ['Morion-UltraLight'],
      }
    },
  },
  plugins: [],
}
