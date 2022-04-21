import Head from "next/head";
import Script from "next/script";

const Nf = () => {
  return (
    <>
      <Head>
        <title>Cat - 404</title>
      </Head>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        onLoad={() => {
          window.location.href = "/";
        }}
      />
    </>
  );
};

export default Nf;
