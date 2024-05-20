import { Fragment } from "react";
import { useSelector } from "react-redux";
import useCompare from "../../../hooks/use-compare";

import LocationsGallery from "./LocationsGallery";

import classes from "./AboutCards.module.css";

import worldclass from "../../../assets/about/mobile/image-world-class-talent.jpg";
import realdeal from "../../../assets/about/mobile/image-real-deal.jpg";
import worldclassTablet from "../../../assets/about/tablet/image-world-class-talent.jpg";
import realdealTablet from "../../../assets/about/tablet/image-real-deal.jpg";
import worldclassDesktop from "../../../assets/about/desktop/image-world-class-talent.jpg";
import realdealDesktop from "../../../assets/about/desktop/image-real-deal.jpg";

const DATA = [
  {
    header: "Talenat svetske klase",
    text1: `Mi smo ekipa stratega, rešavača problema i tehnologa. Svaki dizajn je pažljivo osmišljen od koncepta do lansiranja, osiguravajući uspeh na datom tržištu. Konstantno ažuriramo svoje veštine na bezbroj platformi.`,
    text2: `Naš tim je multidisciplinaran i ne zanima nas samo forma – sadržaj i značenje su podjednako važni. Dajemo veliki značaj izradi, usluzi i brzoj isporuci. Klijenti su uvek bili impresionirani našim visokokvalitetnim rezultatima koji obuhvataju priču i misiju njihovog brenda.`,
  },
  {
    header: "Prava stvar",
    text1: `Kao strateški partneri u poslovanju naših klijenata, spremni smo da prihvatimo svaki izazov kao sopstveni.
    Rešavanje stvarnih problema zahteva empatiju i saradnju, a mi nastojimo da unesemo novu perspektivu u svaku priliku. Dizajn i tehnologiju činimo pristupačnijim i dajemo vam alate za merenje uspeha.`,
    text2: `Mi smo vizuelni pripovedači na privlačne i zadivljujuće načine. Kombinujući poslovne i marketinške strategije, inspirišemo publiku da preduzme akciju i ostvari stvarne rezultate.`,
  },
];

const AboutCards = () => {
  let width = useSelector((state) => state.width.width);

  const compareWorldclass = useCompare(
    width,
    worldclass,
    worldclassTablet,
    worldclassDesktop
  );

  const compareRealDeal = useCompare(
    width,
    realdeal,
    realdealTablet,
    realdealDesktop
  );

  return (
    <Fragment>
      <div className={classes["about-cards"]}>
        <img src={compareWorldclass} alt="header" />
        <div className={classes.wrapper}>
          <h3>{DATA[0].header}</h3>
          <p>{DATA[0].text1}</p>
          <p>{DATA[0].text2}</p>
        </div>
      </div>
      <LocationsGallery />
      <div className={classes["about-cards"]}>
        <img src={compareRealDeal} alt="header" />
        <div className={classes.wrapper}>
          <h3>{DATA[1].header}</h3>
          <p>{DATA[1].text1}</p>
          <p>{DATA[1].text2}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutCards;
