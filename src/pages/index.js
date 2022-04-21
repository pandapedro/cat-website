import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = () => {
  const { t } = useTranslation();

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

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});