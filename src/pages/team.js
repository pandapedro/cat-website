import Head from "next/head";
import Img from "next/image";

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
    <>
      <Head>
        <title>Cat - team</title>
        <meta content="Cat - team" property="og:title" />
        <meta
          content="Know who are responsible for my creation!"
          property="og:description"
        />
        <meta
          content="https://embed.com/this-is-the-site-url"
          property="og:url"
        />
      </Head>
      <div className="team-title">
        <h1>Created by:</h1>
        <div className="team">
          <h1>
            {user.username}#{user.discriminator}
          </h1>
          <Img
            src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`}
          />
          <p1>ID:{user.id}</p1>
        </div>
      </div>
    </>
  );
}
