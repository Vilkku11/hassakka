import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { SectionLinks } from "../../Data";
import { useActiveSectionStore } from "../../store/store";

import "./Header.css";

const Header = () => {
  const { activeSection, setActiveSection } = useActiveSectionStore();

  const changeSection = (section: string) => {
    setActiveSection(section);
  };

  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    updateScrollY();

    window.addEventListener("scroll", updateScrollY);

    return () => {
      window.removeEventListener("scroll", updateScrollY);
    };
  }, []);

  const updateScrollY = () => {
    const isScrolled: boolean = window.scrollY > 50;

    setScrolled((prevScrolled) => {
      if (prevScrolled !== isScrolled) {
        return isScrolled;
      } else {
        return prevScrolled;
      }
    });
  };

  return (
    <motion.header
      className="header"
      animate={{
        top: scrolled ? 0 : 10,
      }}
      initial={{ top: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="nav">
        <ul className="nav-list">
          {SectionLinks.map((link) => (
            <li key={link.name}>
              <a
                className={
                  activeSection === link.name ? "nav-item-active" : "nav-item"
                }
                href={link.href}
                onClick={() => changeSection(link.name)}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="nav-item-background"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 100, //300
                      damping: 10,
                    }}
                  ></motion.span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
