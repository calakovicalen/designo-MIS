import { useEffect } from "react";
import { motion } from "framer-motion";

import Gallery from "../components/sections/Gallery";
import Design from "../components/sections/Design";
import HeaderCard from "../components/sections/cards/HeaderCard";

const AppDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <HeaderCard
        header={"App design"}
        text={
          "Naši mobilni dizajni donose intuitivna digitalna rešenja vašim korisnicima direktno na dohvat ruke."
        }
      />
      <Gallery />
      <Design />
    </motion.div>
  );
};

export default AppDesign;
