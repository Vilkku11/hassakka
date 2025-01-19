import { ReactNode } from "react";

export type DynamicWords = {
  word: string;
  len: number;
};

export type Project = {
  title: string;
  description: ReactNode;
  image: string;
  link: string;
  color: string;
};

export type SectionLink = {
  name: string;
  href: string;
};

export type SingleWord = {
  word: string;
  range: [start: number, end: number];
  progress: any;
};

export type RainDrop = {
  left: string;
  top: string;
  animationDelay: string;
};

export type ImageViewProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  image: string;
};

// Store types

export type VariantStore = {
  currentVariant: string;
  setVariant: (variantName: string) => void;
};

export type ActiveSectionStore = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

export type ImageOpenStore = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  image: string;
  setImage: (image: string) => void;
};
