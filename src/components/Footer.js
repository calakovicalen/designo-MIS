import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import FooterCard from "./UI/FooterCard";
import Logo from "./UI/Logo";
import Media from "./UI/Media";

import classes from "./Footer.module.css";

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
};

const Footer = () => {
  const toggle = useSelector((state) => state.footer.card);

  return (
    <footer
      className={`${classes.footer} ${
        toggle ? classes["footer-big-padding"] : classes["footer-small-padding"]
      }`}
    >
      {toggle && <FooterCard />}
      <div className={classes.container}>
        <Logo className={classes.logo} />
        <ul className={classes.list}>
          <Link to="/about" style={linkStyle}>
            <li>O NAMA</li>
          </Link>
          <Link to="/locations" style={linkStyle}>
            <li>LOKACIJE</li>
          </Link>
          <Link to="/contact" style={linkStyle}>
            <li>KONTAKT</li>
          </Link>
        </ul>
      </div>
      <div className={classes["contact-container"]}>
        <div className={classes.contact}>
          <h5>Designo Central Office</h5>
          <span>Kneza Miloša 20</span>
          <span>Beograd, Srbija 11000</span>
        </div>
        <div className={classes.contact}>
          <h5>Kontaktirajte nas (Central Office)</h5>
          <span>P: +381 11 1234 567</span>
          <span>M: kontakt@designo.rs</span>
        </div>

        <Media />
      </div>
    </footer>
  );
};

export default Footer;
