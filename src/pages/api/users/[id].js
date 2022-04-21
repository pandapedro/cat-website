export default async function handler(req, res) {
  let user = await fetch(`https://discord.com/api/v9/users/${req.query.id}`, {
    headers: {
      Authorization: `Bot ${process.env.TOKEN}`,
    },
  }).then(async (res) => await res.json());

  res.status(200).json(user);
}
