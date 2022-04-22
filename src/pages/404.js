import Head from "next/head";
import Script from "next/script";

const Nf = () => {
  return (
    <>
      <Head>
        <title>Cat - 404</title>
      </Head>
      <div className="home">
        <h1>This page does not exist</h1>
        <p1 id="p1">You will be taken to the homepage in 10 seconds!</p1>
        <div className="buttons">
          <button onClick={(d) => (d.view.document.location.href = "/")}>
            Home page
          </button>
        </div>
      </div>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        onLoad={() => {
          let count = 10;

          setInterval(() => {
            count--;
            
            document.getElementById(
              "p1"
            ).innerHTML = `You will be taken to the homepage in ${count} seconds!`;
          }, 1000);

          setTimeout(() => {
            window.location.href = "/";
          }, 9000);
        }}
      />
    </>
  );
};

export default Nf;
