import Head from "next/head";
import Script from "next/script";

const Nf = () => {
  return (
    <>
      <Head>
        <title>Cat - 404</title>
        <meta content="Cat - 404" property="og:title" />
        <meta content="This page does not exist!" property="og:description" />
        <meta
          content="https://embed.com/this-is-the-site-url"
          property="og:url"
        />
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
