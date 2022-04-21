module.exports = {
  async redirects() {
    return [
      {
        source: "/add",
        destination: `https://discord.com/api/oauth2/authorize?client_id=${process.env.ID}&permissions=8&scope=bot%20applications.commands`,
        permanent: true,
      },
      {
        source: "/help",
        destination: `https://discord.gg/${process.env.HELP}`,
        permanent: true,
      },
    ];
  },
};
