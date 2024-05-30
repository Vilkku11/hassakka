import { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";

const Paragraph = ({ value }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "start 0.25"],
  });

  return (
    <div>
      <div style={{ height: "100vh" }}></div>
      <motion.p
        ref={element}
        className=" max-w-xs mt-20 text-white text-2xl font-bold"
        style={{ opacity: scrollYProgress }}
      >
        {value}
      </motion.p>
    </div>
  );
};
export default Paragraph;
