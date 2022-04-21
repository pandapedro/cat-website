import Navbar from "../components/navbar";
import Footer from "../components/footer";

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

export default App;
