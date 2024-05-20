import { Link } from "react-router-dom";

import classes from "./FooterCard.module.css";
import Button from "./Button";

function FooterCard() {
  return (
    <div className={classes["footer-card"]}>
      <h3>Hajde da pričamo o vašem projektu</h3>
      <p>
        Spremni da pređete na sledeći nivo? Kontaktirajte nas danas i saznajte
        kako naša stručnost može pomoći vašem poslovanju da raste.
      </p>
      <Link to="/contact">
        <Button label="Get in touch" />
      </Link>
    </div>
  );
}

export default FooterCard;
