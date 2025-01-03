import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { Project } from "../../../Data";
import ProjectLink from "../../projectLink/ProjectLink";
import "./Card.css";

const Card = ({
  project,
  index,
  range,
  targetScale,
  progress,
}: {
  project: Project;
  index: number;
  range: any;
  targetScale: number;
  progress: any;
}) => {
  const container = useRef<null | HTMLDivElement>(null);

  const { scrollYProgress }: { scrollYProgress: any } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const cardScale: any = useTransform(progress, range, [1, targetScale]);
  const imageScale: any = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <div ref={container} className="project-card-container">
      <motion.div
        style={{
          scale: cardScale,
          //backgroundColor: project.color,
          backgroundColor: project.color,
          backdropFilter: "blur(50px)",
          top: `calc(-10% + ${index * 20}px)`,
        }}
        className="project-card-style"
      >
        <h1 className="project-header">{project.title}</h1>
        <div className="content-divider">
          <div className="text-container">
            <ProjectLink url={project.link} />
            <p>{project.description}</p>
            <p>{project.link}</p>
          </div>
          <div className="image-container">
            <motion.img
              style={{
                scale: imageScale,
              }}
              className="image"
              src={project.image}
              alt=""
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
