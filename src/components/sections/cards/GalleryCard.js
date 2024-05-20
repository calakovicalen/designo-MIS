import classes from "./GalleryCard.module.css";

const GalleryCard = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default GalleryCard;
