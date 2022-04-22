import { IoLogoJavascript } from "react-icons/io";
import { SiVisualstudio, SiNextdotjs } from "react-icons/si";
import { FaNodeJs, FaCrown } from "react-icons/fa";
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
          <SiNextdotjs color="#4e98d8" />
        </a>{" "}
        <a href="https://nodejs.org/">
          <FaNodeJs color="#4e98d8" />
        </a>{" "}
        <a href="https://www.javascript.com/">
          <IoLogoJavascript color="#4e98d8" />
        </a>{" "}
        <a href="https://code.visualstudio.com/">
          <SiVisualstudio color="#4e98d8" />
        </a>{" "}
        <a href="/credits">
          <FaCrown color="#4e98d8" />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
