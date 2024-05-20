import { useSelector } from "react-redux";

import WebGallery from "./cards/WebGallery";
import AppGallery from "./cards/AppGallery";
import GraphicGallery from "./cards/GraphicGallery";

import classes from "./Gallery.module.css";

const Gallery = () => {
  const web = useSelector((state) => state.link.web);
  const app = useSelector((state) => state.link.app);
  const graphic = useSelector((state) => state.link.graphic);
  return (
    <section className={classes.gallery}>
      {!web && <WebGallery />}
      {!app && <AppGallery />}
      {!graphic && <GraphicGallery />}
    </section>
  );
};

export default Gallery;
