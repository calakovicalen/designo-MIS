import { useEffect } from "react";
import { motion } from "framer-motion";
import Form from "../components/Form";
import LocationsGallery from "../components/sections/cards/LocationsGallery";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <Form />
      <LocationsGallery />
    </motion.div>
  );
};

export default Contact;
