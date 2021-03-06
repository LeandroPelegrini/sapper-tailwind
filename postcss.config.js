module.exports = {
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require('cssnano')({
      preset: ['default', {
          discardComments: {
              removeAll: true,
          },
      }]
  }),
  ]
};