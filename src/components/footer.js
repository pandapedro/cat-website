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

export default function Footer({ user }) {
  console.log(user);
  
  return (
    <>
      <div className="footer">
        <footer>
          <p>
            Powered by: <a href="https://nextjs.org/">next.js</a>,{" "}
            <a href="https://code.visualstudio.com/">vsc</a> &{" "}
            <a href="https://abal.moe/Eris/">eris</a>
          </p>
        </footer>
      </div>
    </>
  );
}
