import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { navigationActions } from "../../store/navigation-slice";

import classes from "./Logo.module.css";

const Logo = (props) => {
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(navigationActions.logo());
  };
  return (
    <Link className={props.className} to="/" onClick={toggleHandler}>
      <div className={classes.logo}></div>
      <header className={classes.header}>DESIGNO</header>
    </Link>
  );
};

export default Logo;
