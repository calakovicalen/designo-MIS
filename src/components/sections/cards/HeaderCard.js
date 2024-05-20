import classes from "./HeaderCard.module.css";

const HeaderCard = (props) => {
  return (
    <div className={classes.header}>
      <h2>{props.header}</h2>
      <p>{props.text}</p>
    </div>
  );
};

export default HeaderCard;
