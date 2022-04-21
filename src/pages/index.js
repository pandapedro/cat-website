import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Cat - website</title>
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
