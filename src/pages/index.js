import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Cat - website</title>
        <meta content="Cat - website" property="og:title" />
        <meta
          content="A simple and multifunctional bot."
          property="og:description"
        />
        <meta
          content="https://embed.com/this-is-the-site-url"
          property="og:url"
        />
      </Head>
      <div className="home">
        <h1>Cat</h1>
        <p1>A simple and multifunctional bot.</p1>
        <div className="buttons">
          <button onClick={(d) => (d.view.document.location.href = "/add")}>
            Add me
          </button>
          <button onClick={(d) => (d.view.document.location.href = "/help")}>
            Support
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
