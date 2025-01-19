import { create } from "zustand";

import { SectionLinks } from "../Data";

import { VariantStore, ActiveSectionStore, ImageOpenStore } from "../Types";

export const useVariantStore = create<VariantStore>((set) => ({
  currentVariant: "default",
  setVariant: (variantName: string): void => {
    set({ currentVariant: variantName });
  },
}));

export const useActiveSectionStore = create<ActiveSectionStore>((set) => ({
  activeSection: SectionLinks[0].name,
  setActiveSection: (section: string) => set({ activeSection: section }),
}));

export const useImageOpenStore = create<ImageOpenStore>((set) => ({
  isOpen: false,
  setIsOpen: (newValue: boolean): void => {
    set({ isOpen: newValue });
  },
  image: "",
  setImage: (newImage: string): void => {
    set({ image: newImage });
  },
}));
