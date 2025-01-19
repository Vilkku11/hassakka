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
  /*{
    title: "Homeassistant",
    description: "This is a simple test description",
    image: "/src/assets/homeassistant.webp",
    link: "https://github.com/Missing-Link-harkat/homeassistant",
    color: "586F7C", //"#D3D3D3",
  },
  {
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
        for the specified interface. Built using <strong>C++</strong> with the
        <strong>nlohmann/json</strong> library for JSON handling and{" "}
        <strong>CLI11</strong> for command-line parsing.
      </>
    ),
    image: "/src/assets/netspeed.webp",
    link: "https://github.com/Vilkku11/netspeed",
    color: "F4F4F9 ", //" #708090",
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
    image: "/src/assets/foresthaven.webp",
    link: "https://github.com/timosiu/Software-Project2023",
    color: "04724D", //"#36454F",
  },
  /* {
    title: "Portfolio",
    description:
      "You're vieweing this project right now!!! My playground to try and extend the capapbilities of webbrowsers",
    image: "",
    link: "https://github.com/timosiu/Software-Project2023",
    color: "04724D", //"#36454F",
  },*/
] as const;

export const SectionLinks: SectionLink[] = [
  { name: "About me", href: "#init" },
  { name: "Projects", href: "#projects" },
  { name: "End", href: "#end" },
] as const;
