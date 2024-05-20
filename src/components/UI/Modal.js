import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

import { navigationActions } from "../../store/navigation-slice";
import classes from "./Modal.module.css";
import List from "./List";

const Modal = () => {
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(navigationActions.menu());
  };

  return (
    <motion.div
      className={classes.modal}
      initial={{ top: 0 }}
      animate={{ top: "95px" }}
      exit={{ top: 0 }}
    >
      <List className={classes.list} />
      <div className={classes.backdrop} onClick={toggleHandler}></div>
    </motion.div>
  );
};

export default Modal;
