module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.handlebars", './src/**/*.vue',
    './public/**/*.html',"./public/*.html" ,'./public/stylesheets/tailwind.css', 'public/stylesheets/tailwind.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/assets/bgBooks.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
