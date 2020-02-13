// module.exports = {
//   plugins: [require("tailwindcss")("./tailwind.config.js")]
// };

module.exports = {
  plugins: [
    // ...
    require("tailwindcss"),
    require("autoprefixer")
    // ...
  ]
};
