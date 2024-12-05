/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'aside':'#093545',
        'font': ' rgba(32, 223, 127, 1)',
        'color-conexion':' #093545',
        'color-vert':'#20DF7F',
        'color-textbt':'#224957',
        'blanc':'#fff',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat','sans-serif'],
        lexendDeca: ['Lexend Deca','sans-serif']
      }
    },
  },
  plugins: [
  ],
}
