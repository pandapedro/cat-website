const path = require("path");

module.exports = {
  i18n: {
    locales: ["en-US", "pt-BR"],
    defaultLocale: "pt-BR",
    localeDetection: false,
    localePath: path.resolve("./public/locales/"),
  },
};
