import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import Modal from "./UI/Modal";
import Burger from "./UI/Burger";
import Logo from "./UI/Logo";
import List from "./UI/List";
import classes from "./Navigation.module.css";
import { navigationActions } from "../store/navigation-slice";

const Navigation = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.navigation.open);
  let width = useSelector((state) => state.width.width);

  const toggleHandler = () => {
    dispatch(navigationActions.menu());
  };

  return (
    <Fragment>
      <nav className={classes.navigation}>
        <Logo className={classes.logo} />
        {width >= 768 ? (
          <List className={classes.list} />
        ) : (
          <Burger open={toggle} setOpen={toggleHandler} />
        )}
      </nav>
      {toggle && <Modal />}
    </Fragment>
  );
};

export default Navigation;
