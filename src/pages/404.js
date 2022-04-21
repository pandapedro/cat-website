import Head from "next/head";

const Nf = () => {
    return (
      <>
        <Head>
          <title>Cat - non-existent page</title>
        </Head>
        <div className="home">
          <h1>This page does not exist</h1>
          <p1>Please, go back to home page ;)</p1>
          <div className="buttons">
            <button onClick={(d) => (d.view.document.location.href = "/")}>
              Home page
            </button>
          </div>
        </div>
      </>
    );
};

export default Nf;