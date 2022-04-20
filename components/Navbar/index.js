import Themes from "../Themes/index";
import Img from "next/image";
import Logo from "../../public/favicon.ico";

const Navbar = () => {
  return (
    <nav>
      <div className="content">
        <div className="logo-img">
          <Img src={Logo} alt="Searcher Logo" width="75" height="75" />
        </div>
        <p>Cat</p>
        <ul>
          <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn">
              Menu
            </a>
            <div class="dropdown-content">
              <a href="/">Home</a>
              <a href="/terms">Terms</a>
              <a href="/commands">Commands</a>
            </div>
          </li>
          <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn">
              Settings
            </a>
            <div class="dropdown-content">
              <a>
                <Themes />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
