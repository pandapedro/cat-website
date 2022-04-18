import "../styles/_app.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { appWithTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Navbar />
      <div className="nav-space" />
      <div className="container">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  };
}

export default appWithTranslation(App);
