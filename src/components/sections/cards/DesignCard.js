import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Arrow from "../../svgs/Arrow";
import classes from "./DesignCard.module.css";
import { linkActions } from "../../../store/link-slice";

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
};

const DesignCard = (props) => {
  const dispatch = useDispatch();

  const webHandler = () => {
    dispatch(linkActions.web());
  };

  const appHandler = () => {
    dispatch(linkActions.app());
  };

  const graphicHandler = () => {
    dispatch(linkActions.graphic());
  };

  const comparing = (web, app, graphic) => {
    if (props.header === "Web design") {
      return web;
    } else if (props.header === "App design") {
      return app;
    } else {
      return graphic;
    }
  };

  return (
    <Link
      key={props.id}
      style={linkStyle}
      onClick={comparing(webHandler, appHandler, graphicHandler)}
      to={comparing("/web-design", "/app-design", "/graphic-design")}
    >
      <div
        className={`${classes["design-card"]} ${comparing(
          classes.web,
          classes.app,
          classes.graphic
        )}`}
      >
        <h3>{props.header}</h3>
        <p>
          View projects <Arrow />
        </p>
      </div>
    </Link>
  );
};

export default DesignCard;
