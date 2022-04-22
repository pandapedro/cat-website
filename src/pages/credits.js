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
      user,
    },
    revalidate: 60,
  };
}

export default function Team({ user }) {
  return (
    <>
      <Head>
        <title>Cat - credits</title>
      </Head>
      <div className="terms">
        <h2>Made by:</h2>
        <h3>
          &bull; {user.username}#{user.discriminator} (id: {user.id})
        </h3>
      </div>
    </>
  );
}
