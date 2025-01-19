import { useRef } from "react";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";

import { SingleWord } from "../../Types";

import "./Paragraph.css";

const ParagraphWords = ({ text }: { text: string }) => {
  const element = useRef<HTMLHeadingElement | null>(null);

  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll({
      target: element,
      offset: ["start 0.9", "start 0.5"],
    });
  const words: string[] = text.trim().split(/\s+/);
  console.log(words);

  return (
    <div>
      <motion.p
        ref={element}
        className="paragraph-text"
        style={{ opacity: scrollYProgress }}
      >
        {words.map((word, i) => {
          const start: number = i / words.length;
          const end: number = start + 1 / words.length;

          const singleWord: SingleWord = {
            word: word,
            range: [start, end],
            progress: scrollYProgress,
          };

          return <Word key={i} {...singleWord}></Word>;
        })}
      </motion.p>
    </div>
  );
};

const Word = ({ word, range, progress }: SingleWord) => {
  const opacity: any = useTransform(progress, range, [0, 1]);
  return (
    <span className="word-container">
      <span className="word-item">{word}</span>
      <motion.span style={{ opacity }}>{word}</motion.span>
    </span>
  );
};

export default ParagraphWords;
