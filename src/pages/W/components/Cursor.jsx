import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Cursor.css";

const Cursor = ({ cursorVariant }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);
    document.documentElement.classList.add("hide-cursor");

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.documentElement.classList.remove("hide-cursor");
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
    },
    text: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      height: 150,
      width: 150,
      //backgroundColor: "black",
      mixBlendMode: "difference",
    },
  };

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={cursorVariant}
    />
  );
};

export default Cursor;
