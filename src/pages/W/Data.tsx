import netspeed from "../../assets/netspeed.webp";
import foresthaven from "../../assets/foresthaven.webp";
import portfolio from "../../assets/portfolio.webp";
import homeassistant from "../../assets/homeassistant.webp";

import { DynamicWords, Project, SectionLink } from "./Types";

export const dynamicWords: DynamicWords[] = [
  { word: "innovation", len: 10 },
  { word: "curiosity", len: 9 },
  { word: "excellence", len: 10 },
  { word: "collaboration", len: 14 },
  { word: "creativity", len: 11 },
  { word: "efficiency", len: 10 },
  { word: "adaptability", len: 14 },
  { word: "problem-solving", len: 15 },
  { word: "dedication", len: 10 },
  { word: "passion for learning", len: 20 },
];

export const projects: Project[] = [
  {
    title: "Homeassistant",
    description: (
      <>
        A detailed exploration of <strong>Home Assistant</strong> and its
        capabilities as a foundation for automation systems, conducted as part
        of my thesis. Project contains automation install scripts for Home
        Assistant install on top of OpenWRT.
      </>
    ),
    image: homeassistant,
    link: "https://github.com/Missing-Link-harkat/homeassistant",
    color: "rgba(0,0,0,0.98)", //"#D3D3D3",
  },
  /*{
    title: "Autoclicker",
    description:
      "A cross-platform autoclicker built using the Tauri framework, offering advanced automation features such as customizable clicking, key holding, and precise mouse movement.",
    image: "/src/assets/autoclicker.webp",
    link: "https://github.com/Vilkku11/autoclicker",
    color: "B8DBD9", //"#A9A9A9",
  },*/
  {
    title: "Netspeed",
    description: (
      <>
        A command-line utility to monitor real-time internet usage on Linux
        systems. The tool fetches network interface data from
        <strong> /proc/net/dev</strong> and displays current usage statistics
        for the specified interface. Built using <strong>C++</strong> with the{" "}
        <strong>nlohmann/json</strong> library for JSON handling and{" "}
        <strong>CLI11</strong> for command-line parsing.
      </>
    ),
    image: netspeed,
    link: "https://github.com/Vilkku11/netspeed",
    color: "rgba(0,0,0,0.98)", //" #708090",
  },
  {
    title: "Forest Haven Resort",
    description: (
      <>
        A collaborative project between SW and IB students for the 'Software
        Project' course. The IB students provided the design vision and
        functional requirements for a resort website, while our team developed a
        complete web service from the ground up. The project featured a{" "}
        <strong>React</strong> front-end styled with{" "}
        <strong>Tailwind CSS</strong> and a <strong>Node.js</strong> back-end
        with <strong>MySQL</strong> database. Additionally, the entire service
        was deployed to production using a CI/CD pipeline set up with{" "}
        <strong>GitHub Actions</strong>, hosted on Render.com.
      </>
    ),
    image: foresthaven,
    link: "https://github.com/timosiu/Software-Project2023",
    color: "rgba(0,0,0,0.98)", //"#36454F",
  },
  {
    title: "Portfolio (this site)",
    description: (
      <>
        A personal portfolio website built with <strong>React</strong> and
        Vanilla <strong>CSS</strong>, designed as both a showcase of my projects
        and a playground for exploring modern web capabilities.
      </>
    ),
    image: portfolio,
    link: "https://github.com/Vilkku11/portfolio",
    color: "rgba(0,0,0,0.98)", //"#36454F",
  },
] as const;

export const SectionLinks: SectionLink[] = [
  { name: "About me", href: "#init" },
  { name: "Projects", href: "#projects" },
  { name: "End", href: "#end" },
] as const;
