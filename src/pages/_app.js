import "../styles/global.css";
import Navbar from "../components/navbar";

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
}

export default App;
