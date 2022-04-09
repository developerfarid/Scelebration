module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      backgroundImage: {
        'hero': "url('/src/assets/images/hero-background.png')",
        'footer': "url('/src/assets/images/footer-background.jpeg')",
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(0px)' },
        }
      },
      colors:{
        'text-p': '#796f57',
        'text-heading': '#f45a5a',
        'text-sub': '#857a5e',
        'sub': '#AD8C7D',
        'sub-p': '#4A4A4A',
        'bg-color': '#fff4f2',
      },

      fontFamily: {
        'Lato': ['Lato', 'sans-serif'],
        'Overlock':['Overlock'],
        'Sail':['Sail',],
        'Karla':['Karla',],
      },
    },
  },
  plugins: [],
};


