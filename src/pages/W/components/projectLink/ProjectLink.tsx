import { FaGithub } from "react-icons/fa";

import "./ProjectLink.css";

const ProjectLink = ({ url }: { url: string }) => {
  return (
    <a href={url} className="github-link" target="_blank">
      <FaGithub size={24} />
      <span>Project in GitHub</span>
    </a>
  );
};

export default ProjectLink;
