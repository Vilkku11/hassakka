import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Cursor.css";

const Cursor = ({ cursorVariant, setCursorVariant, stickyElement }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    default: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      offset: 32,
      transition: {
        duration: 0,
        ease: "easeInOut",
      },
    },
    text: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      height: 150,
      width: 150,
      offset: 75,
      transition: {
        duration: 0,
        ease: "easeInOut",
      },
      mixBlendMode: "difference",
    },
  };

  const manageMouseOver = () => {
    console.log("mouseHOVER");
    setIsHovered(true);
    //console.log(isHovered);
    setCursorVariant("text");
  };

  const manageMouseLeave = () => {
    console.log("MOUSE LEAVE");
    //console.log(isHovered);
    setIsHovered(false);
    setCursorVariant("default");
  };

  const mouseMove = (event) => {
    console.log("ishovered in mousemove", isHovered);
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    console.log("update to ", isHovered);
  }, [isHovered]);

  useEffect(() => {
    stickyElement.current.addEventListener("mouseover", manageMouseOver);
    stickyElement.current.addEventListener("mouseleave", manageMouseLeave);
    window.addEventListener("mousemove", mouseMove);
    document.documentElement.classList.add("hide-cursor");

    return () => {
      stickyElement.current.removeEventListener("mouseover", manageMouseOver);
      stickyElement.current.removeEventListener("mouseleave", manageMouseLeave);
      window.removeEventListener("mousemove", mouseMove);
      document.documentElement.classList.remove("hide-cursor");
    };
  }, [isHovered]);

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={cursorVariant}
      style={{ offset: 0 }}
      //style={{
      // left: mousePosition.x - offset,
      // top: mousePosition.y - offset,
      //}}
    />
  );
};

export default Cursor;
