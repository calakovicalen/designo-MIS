import classes from "./Media.module.css";

import Facebook from "../svgs/Facebook";
import Instagram from "../svgs/Instagram";
import Twitter from "../svgs/Twitter";
import Youtube from "../svgs/Youtube";
import Pinterest from "../svgs/Pinterest";

const Media = () => {
  return (
    <div className={classes.media}>
      <Facebook />
      <Youtube />
      <Twitter />
      <Pinterest />
      <Instagram />
    </div>
  );
};

export default Media;
