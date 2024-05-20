import { useSelector } from "react-redux";

import DesignCard from "./cards/DesignCard";
import classes from "./Design.module.css";

const Design = () => {
  const web = useSelector((state) => state.link.web);
  const app = useSelector((state) => state.link.app);
  const graphic = useSelector((state) => state.link.graphic);

  return (
    <section className={classes.designs}>
      {web && <DesignCard header="Web design" />}
      {app && <DesignCard header="App design" />}
      {graphic && <DesignCard header="Graphics design" />}
    </section>
  );
};

export default Design;
