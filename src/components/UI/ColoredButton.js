import classes from "./ColoredButton.module.css";

const ColoredButton = (props) => {
  return <button className={classes.button}>{props.label}</button>;
};

export default ColoredButton;