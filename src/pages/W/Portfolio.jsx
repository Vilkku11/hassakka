import { useState, useRef } from "react";
import { IconMenu2 } from "@tabler/icons-react";

import Cursor from "./components/cursor/Cursor";
import Footer from "./components/Footer";
import ProjectShowCase from "./components/ProjectShowCase";
import Paragraph from "./components/Paragraph";
import ParagraphWords from "./components/ParagraphWords";
import Curve from "./components/curve/Curve";

import "./Portfolio.css";

const Portfolio = () => {
  const [cursorVariant, setCursorVariant] = useState("default");

  const stickyElement = useRef(null);

  const textEnter = () => {
    setCursorVariant("text");
  };
  const textLeave = () => {
    setCursorVariant("default");
  };
  return (
    <div className="top-0 left-0 w-full bg-black">
      <div className="flex flex-col items-center">
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className=" max-w-max mt-80 text-white text-9xl font-mono "
        >
          Welcome!
        </h1>
        <IconMenu2 ref={stickyElement} stroke={2} color="white" />
        <p
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="max-w-max mt-20 text-white font-mono"
        >
          A small amount of text, maybe some introduction text or something like
          that. Maybe a bit what kind of things could be added here on this page
          or something like that.
        </p>
        <Paragraph
          value="          A small amount of text, maybe some introduction text or something like
          that. Maybe a bit what kind of things could be added here on this page
          or something like that."
        />
        <ParagraphWords value="A small amount of text, maybe some introduction text or something like that. Maybe a bit what kind of things could be added here on this page or something like that." />

        <h1
          className="max-w-max mt-80 text-white text-6xl font-mono"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          My projects
        </h1>
        <Curve />
        <ProjectShowCase />
      </div>
      <Footer />
      <Cursor
        cursorVariant={cursorVariant}
        setCursorVariant={setCursorVariant}
        stickyElement={stickyElement}
      />
    </div>
  );
};

export default Portfolio;
