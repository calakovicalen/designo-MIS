import { useEffect } from "react";
import { motion } from "framer-motion";

import AboutHeader from "../components/sections/cards/AboutHeader";
import AboutCards from "../components/sections/cards/AboutCards";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <AboutHeader />
      <AboutCards />
    </motion.section>
  );
};

export default About;
