/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sunny': "url('../img/sunnyReal.jpg')",
        'partlyCloudy': "url('../img/partlyCloudy.jpg')",
        'rain': "url('../img/rain.png')",
        'overcast': "url('../img/overcast.jpg')",
        'misty': "url('../img/misty.jpg')",
        'snow': "url('../img/snow.jpg')",
      }
    },
  },
  plugins: [],
}
