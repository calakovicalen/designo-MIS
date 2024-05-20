import { useEffect } from "react";
import { motion } from "framer-motion";

import Gallery from "../components/sections/Gallery";
import Design from "../components/sections/Design";
import HeaderCard from "../components/sections/cards/HeaderCard";

const GraphicDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <HeaderCard
        header={"Graphic design"}
        text={
          "Isporučujemo upadljive materijale za brendiranje koji su prilagođeni vašim poslovnim ciljevima."
        }
      />
      <Gallery />
      <Design />
    </motion.div>
  );
};

export default GraphicDesign;
