import { IoLogoJavascript } from "react-icons/io";
import { SiVisualstudio, SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import Img from "next/image";
import Eris from "../../assets/images/eris.png";

const Footer = () => {
  return (
    <footer>
      <p>
        Powered by{" "}
        <a href="https://abal.moe/Eris/">
          <Img src={Eris} width={20} height={20} />
        </a>{" "}
        <a href="https://nextjs.org/">
          <SiNextdotjs />
        </a>{" "}
        <a href="https://nodejs.org/">
          <FaNodeJs />
        </a>{" "}
        <a href="https://www.javascript.com/">
          <IoLogoJavascript />
        </a>{" "}
        <a href="https://code.visualstudio.com/">
          <SiVisualstudio />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
