import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

import LocationsCards from "../components/sections/cards/LocationsCards";
import { locationActions } from "../store/location-slice";

const Locations = () => {
  const dispatch = useDispatch();
  const canada = useSelector((state) => state.location.canada);
  const australia = useSelector((state) => state.location.australia);
  const uk = useSelector((state) => state.location.uk);

  useEffect(() => {
    if (canada) {
      window.scrollTo(0, 96);
    } else if (australia) {
      window.scrollTo(0, 810);
    } else if (uk) {
      window.scrollTo(0, 1620);
    } else {
      dispatch(locationActions.reset());
      window.scrollTo(0, 0);
    }
  }, [canada, australia, uk, dispatch]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <LocationsCards />
    </motion.section>
  );
};

export default Locations;
