import { useSelector } from "react-redux";
import useCompare from "../../../hooks/use-compare";
import classes from "./LocationsCards.module.css";

import canada from "../../../assets/locations/desktop/image-map-canada.png";
import australia from "../../../assets/locations/desktop/image-map-australia.png";
import uk from "../../../assets/locations/desktop/image-map-united-kingdom.png";
import canadaTablet from "../../../assets/locations/tablet/image-map-canada.png";
import australiaTablet from "../../../assets/locations/tablet/image-map-australia.png";
import ukTablet from "../../../assets/locations/tablet/image-map-uk.png";

const LocationsCards = () => {
  let width = useSelector((state) => state.width.width);
  const compareCanada = useCompare(width, canada, canadaTablet, canada);
  const compareAustralia = useCompare(
    width,
    australia,
    australiaTablet,
    australia
  );
  const compareUK = useCompare(width, uk, ukTablet, uk);

  const DATA = [
    {
      image: compareCanada,
      title: "Beograd",
      address: {
        header: "Designo Central Office",
        text1: "Kneza Miloša 20",
        text2: "Beograd, Srbija 11000",
      },
      contact: {
        header: "Kontaktirajte nas",
        text1: "P: +381 11 1234 567",
        text2: "M : kontakt@designo.rs",
      },
    },
    {
      image: compareAustralia,
      title: "Novi Sad",
      address: {
        header: "Designo NS Office",
        text1: "Bulevar Oslobođenja 30",
        text2: "Novi Sad, Srbija 21000",
      },
      contact: {
        header: "Kontaktirajte nas",
        text1: "P: +381 21 9876 543",
        text2: "M: kontakt@designo.rs",
      },
    },
    {
      image: compareUK,
      title: "Niš",
      address: {
        header: "Designo NI Office",
        text1: "Vožda Karađorđa 15",
        text2: "Niš, Srbija 18000",
      },
      contact: {
        header: "Kontaktirajte nas",
        text1: "P: +381 18 6543 210",
        text2: "M: kontakt@designo.rs",
      },
    },
  ];

  return (
    <div className={classes.container}>
      {DATA.map((item, index) => {
        return (
          <div key={index} className={classes.card}>
            <img src={item.image} alt={item.title} />
            <div className={classes["card-text"]}>
              <h3>{item.title}</h3>
              <div className={classes["text-container"]}>
                <h5>{item.address.header}</h5>
                <span>{item.address.text1}</span>
                <span>{item.address.text2}</span>
              </div>
              <div className={classes["text-container"]}>
                <h5>{item.contact.header}</h5>
                <span>{item.contact.text1}</span>
                <span>{item.contact.text2}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LocationsCards;
