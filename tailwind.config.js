module.exports = {
  purge: ["./views/*.handlebars", "./views/**/*.handlebars"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/assets/bgBooks.jpg')",
      },
    },
  },
  variants: {},
  plugins: [],
};
