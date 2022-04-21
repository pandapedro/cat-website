module.exports = {
  i18n: {
    defaultLocale: "en-US",
    locales: ["en-US", "pt-BR"],
  },
  async redirects() {
    return [
      {
        source: "/help",
        destination: `https://discord.gg/${process.env.HELP}`,
        permanent: true,
      },
      {
        source: "/add",
        destination: `https://discord.com/api/oauth2/authorize?client_id=${process.env.ID}&permissions=8&scope=bot%20applications.commands`,
        permanent: true,
      },
    ];
  },
};
