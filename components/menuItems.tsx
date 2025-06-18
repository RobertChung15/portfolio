import React from "react";
import { motion } from "framer-motion";

interface MenuItemsProps {
  activeSection: string;
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  section1Ref: React.RefObject<HTMLDivElement | null>;
  section2Ref: React.RefObject<HTMLDivElement | null>;
  section3Ref: React.RefObject<HTMLDivElement | null>;
}

const MenuItems: React.FC<MenuItemsProps> = ({
  activeSection,
  scrollToSection,
  section1Ref,
  section2Ref,
  section3Ref,
}) => {
  const listItemVariants = {
    initial: { width: "8px", height: "8px", backgroundColor: "white" },
    hover: { width: "20px", height: "4px", backgroundColor: "white", x: 10 },
  };

  return (
    <ul className="mt-4 list-none">
      {["about", "experience", "projects"].map((section) => (
        <li
          key={section}
          className={`flex items-center ${
            activeSection === section
              ? "font-normal text-white"
              : "text-gray-500 hover:text-white hover:translate-x-3 transition duration-500"
          }`}
        >
          <motion.div
            className={`h-0.5 w-10 ${
              activeSection === section
                ? "font-normal bg-white"
                : "bg-gray-500 hover:bg-white"
            }`}
          />
          <button
            onClick={() => {
              if (section === "about") scrollToSection(section1Ref);
              if (section === "experience") scrollToSection(section2Ref);
              if (section === "projects") scrollToSection(section3Ref);
            }}
            className="ml-2"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;
