import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import useCompare from "../hooks/use-compare";

import classes from "./Home.module.css";
import image from "../assets/home/mobile/mobile.png";
import imageDesktop from "../assets/home/desktop/home-phone-desktop.png";

import Design from "../components/sections/Design";
import Advantages from "../components/sections/Advantages";
import Button from "../components/UI/Button";

const Home = () => {
  let width = useSelector((state) => state.width.width);

  const phoneImage = useCompare(width, image, image, imageDesktop);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <section className={classes.home}>
        <div className={classes.container}>
          <header>
            Nagrađivani prilagođeni dizajni i digitalna rešenja za brendiranje
          </header>
          <p>
            Sa preko 10 godina u industriji, iskusni smo u kreiranju potpuno
            responzivnih veb sajtova, dizajnu aplikacija i angažujućih brend
            iskustava. Saznajte više o našim uslugama.
          </p>
          <Link to="/about">
            <Button label="Learn more" />
          </Link>
        </div>
        <div className={classes.image}>
          <img src={phoneImage} alt="phone" />
        </div>
      </section>
      <Design />
      <Advantages />
    </motion.main>
  );
};

export default Home;
