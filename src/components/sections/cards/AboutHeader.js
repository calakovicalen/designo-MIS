import { useSelector } from "react-redux";
import useCompare from "../../../hooks/use-compare";

import classes from "./AboutHeader.module.css";

import about from "../../../assets/about/mobile/image-about-hero.jpg";
import aboutTablet from "../../../assets/about/tablet/image-about-hero.jpg";
import aboutDesktop from "../../../assets/about/desktop/image-about-hero.jpg";

const AboutHeader = () => {
  let width = useSelector((state) => state.width.width);

  const compareAbout = useCompare(width, about, aboutTablet, aboutDesktop);
  return (
    <div className={classes["about-header"]}>
      <img src={compareAbout} alt="header" />
      <div className={classes.wrapper}>
        <h3>O Nama</h3>
        <p>
          Osnovani 2010. godine, mi smo kreativna agencija koja proizvodi trajne
          proizvode za naše klijente. Udružili smo se sa mnogim startapima,
          korporacijama i neprofitnim organizacijama za izradu dizajna koji su
          stvarno uticajni. Uvek se radujemo stvaranju brendova, proizvoda i
          digitalna iskustva koja se povezuju sa publikom naših klijenata.
        </p>
      </div>
    </div>
  );
};

export default AboutHeader;
