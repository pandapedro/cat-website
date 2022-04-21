import Head from "next/head";

const Terms = () => {
  return (
    <>
      <Head>
        <title>Cat - terms</title>
      </Head>
      <div className="terms">
        <h2>Terms</h2>
        <h3>
          To facilitate your navigation on the page, you can go straight to a of
          these topics:
        </h3>
        <br />
        <p>
          <a href="#tu">Terms of use</a> <br />
          <a href="#pp">Privacy policy</a>
        </p>
        <br />
        <p>
          "REMEMBERING: "<strong>by using me, you agree to the terms</strong>
        </p>
        <h2 id="tu">Terms of use</h2>
        <h3>The following actions will not be tolerated:</h3>
        <p>1 - Send fake news related to me.</p>
        <p>
          2 - Use my features to break discord guidelines, bypass my
          restrictions and disclose adult or obsene content.
        </p>
        <p>
          3 - Attack me, offend, curse, harm, sexualize, plagiarize, overthrow
          or pretend to be me or someone on my team.
        </p>
        <h2 id="pp">Privacy policy</h2>
        <p>
          1 - We do not store personal user data, only public data for some
          systems to work.
        </p>
      </div>
    </>
  );
};

export default Terms;
