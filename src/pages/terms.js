import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Terms = () => {
  const { t } = useTranslation("terms");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <div className="terms">
        <h2>{t("h2")}</h2>
        <h3>
          {t("h3")}
        </h3>
        <br />
        <p>
          <a href="#tu">{t("tu")}</a> <br />
          <a href="#pp">{t("pp")}</a>
        </p>
        <br />
        <p>
          REMEMBERING: <strong>by using me, you agree to the terms</strong>
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

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["terms"])),
  },
});

export default Terms;
