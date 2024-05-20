import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import ColoredButton from "../../UI/ColoredButton";

import classes from "./LocationsGallery.module.css";
import { locationActions } from "../../../store/location-slice";

import Australia from "../../svgs/Australia";
import Canada from "../../svgs/Canada";
import UK from "../../svgs/UK";

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
};

const LocationsGallery = () => {
  const dispatch = useDispatch();

  const scrollToCanada = () => {
    dispatch(locationActions.canada());
  };

  const scrollToAustralia = () => {
    dispatch(locationActions.austalia());
  };

  const scrollToUK = () => {
    dispatch(locationActions.uk());
  };

  return (
    <div className={classes["locations-gallery"]}>
      <div className={classes["item-container"]}>
        <Canada />
        <h3>Canada</h3>
        <Link to="/locations" style={linkStyle} onClick={scrollToCanada}>
          <ColoredButton label={"See location"} />
        </Link>
      </div>
      <div className={classes["item-container"]}>
        <Australia />
        <h3>Australia</h3>
        <Link to="/locations" style={linkStyle} onClick={scrollToAustralia}>
          <ColoredButton label={"See location"} />
        </Link>
      </div>
      <div className={classes["item-container"]}>
        <UK />
        <h3>United Kingdom</h3>
        <Link to="/locations" style={linkStyle} onClick={scrollToUK}>
          <ColoredButton label={"See location"} />
        </Link>
      </div>
    </div>
  );
};

export default LocationsGallery;
