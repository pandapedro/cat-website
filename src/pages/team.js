import Script from "next/script";
import Head from "next/head";

export async function getStaticProps() {
  let user = await fetch(
    `https://discord.com/api/v9/users/485141005796900867`,
    {
      headers: {
        Authorization: `Bot ${process.env.TOKEN}`,
      },
    }
  ).then(async (res) => await res.json());

  return {
    props: {
      user: user,
    },
    revalidate: 360,
  };
}

export default function TeamPage({ user }) {
  return (
    <div className="team-title">
      <h1>Created by:</h1>
      <div className="team">
        <h1>
          {user.username}#{user.discriminator}
        </h1>
        <img
          src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`}
        />
        <p1>ID:{user.id}</p1>
      </div>
    </div>
  );
}
