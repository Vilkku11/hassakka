import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { useVariantStore } from "../../store/store";

import "./Cursor.css";

type Variant = {
  x: number;
  y: number;
  height: number;
  width: number;
  offset: number;
  transition: {
    duration: number;
    ease: string;
  };
  mixBlendMode?: MixBlendMode;
};

type MixBlendMode =
  | "normal"
  | "multiply"
  | "screen"
  | "overlay"
  | "darken"
  | "lighten"
  | "color-dodge"
  | "color-burn"
  | "hard-light"
  | "soft-light"
  | "difference"
  | "exclusion"
  | "hue"
  | "saturation"
  | "color"
  | "luminosity";

const Cursor = ({ stickyElement }: { stickyElement: any }) => {
  const { currentVariant, setVariant } = useVariantStore();

  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const variants: { [key: string]: Variant } = {
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

  const manageMouseOver = (): void => {
    setIsHovered(true);
    setVariant("text");
  };

  const manageMouseLeave = (): void => {
    setIsHovered(false);
    setVariant("default");
  };

  const mouseMove = (event: MouseEvent): void => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    stickyElement.current.addEventListener("mouseover", manageMouseOver);
    stickyElement.current.addEventListener("mouseleave", manageMouseLeave);
    window.addEventListener("mousemove", mouseMove);

    return () => {
      stickyElement.current.removeEventListener("mouseover", manageMouseOver);
      stickyElement.current.removeEventListener("mouseleave", manageMouseLeave);
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [isHovered]);

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={currentVariant}
      style={{ offset: 0 }}
    />
  );
};

export default Cursor;
