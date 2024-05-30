import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const ParagraphWords = ({ value }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.5"],
  });
  const words = value.split(" ");

  return (
    <div>
      <div style={{ height: "100vh" }}></div>
      <p
        ref={element}
        className=" max-w-xs mt-20 text-white text-2xl font-bold flex flex-wrap"
        style={{ opacity: scrollYProgress }}
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word
              key={i}
              range={[start, end]}
              progress={scrollYProgress}
              word={word}
            ></Word>
          );
        })}
      </p>
    </div>
  );
};

const Word = ({ word, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="mr-1 mt-1">
      <span className="opacity-0 absolute">{word}</span>
      <motion.span style={{ opacity }}>{word}</motion.span>
    </span>
  );
};

export default ParagraphWords;
