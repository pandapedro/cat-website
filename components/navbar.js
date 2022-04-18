import Themes from "./themes";

const Navbar = () => {
  return (
    <nav>
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
            Dark
          </a>
          <div class="dropdown-content">
            <a>
              <Themes />
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
