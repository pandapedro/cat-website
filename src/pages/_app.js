import "../styles/global.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { appWithTranslation } from "next-i18next";

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

export default appWithTranslation(App);
