import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          {/* <p>Terms & Conditions</p> */}
        </div>
        <div className="socials">
          <a href="https://www.linkedin.com/in/tudor-manea" target="_blank" rel="noopener noreferrer" className="icon">
            <img src="/images/linkedin.png" alt="LinkedIn" className="inline-block" />
          </a>
          <a
            href="https://github.com/tudor-manea"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <img src="/images/github.png" alt="GitHub" className="inline-block filter-invert brightness-85" />
          </a>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Tudor Manea. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
