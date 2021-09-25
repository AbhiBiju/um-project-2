module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.handlebars"],
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
