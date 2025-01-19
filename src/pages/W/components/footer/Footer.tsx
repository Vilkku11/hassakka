import Curve from "../curve/Curve";
import SectionObserver from "../sectionObserver/SectionObserver";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="end">
      <Curve />
      <h1 className="footer-header">That's all for now.</h1>
      <p>
        Check out more projects{" "}
        <a
          className="footer-link"
          href="https://github.com/Vilkku11?tab=repositories"
          target="_blank"
        >
          Here.
        </a>
      </p>
      <SectionObserver sectionName="End" threshold={0.5} />
    </div>
  );
};

export default Footer;
