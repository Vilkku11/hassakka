import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { DynamicWords } from "../../Types";

import "./SlotText.css";

const SlotText = ({ words }: { words: DynamicWords[] }) => {
  //const words: string[] = ["test1", "test2", "test3", "test4"];
  const [currentWord, setCurrentWord] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  // Handle visibility state for pausing animations.
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        setIsVisible(false);
        return;
      }
      setIsVisible(true);
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  // Update "currentWord" periodically.
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentWord((prevIndex) => {
        if (prevIndex == words.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 2700);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <span
      className="slot-text"
      style={{
        width: `${words[currentWord].len + 1}ch`,
        transition: "width 0.5s ease-in-out",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[currentWord].word}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          layout
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
        >
          {words[currentWord].word}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default SlotText;
