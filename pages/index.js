import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = () => {
  const router = useRouter(),
    { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Cat - website</title>
      </Head>
      <div className="home">
        <h1>Cat</h1>
        <p1>{t("p1")}</p1>
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

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});

export default Home;
