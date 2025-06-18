"use client";
import React, { useEffect, useState, useRef } from "react";
import AboutComponent from "@/components/aboutComponent";
import ExperienceComponent from "@/components/experienceComponent";
import ProjectComponent from "@/components/projectComponent";
import Link from "next/link";
import ContactComponent from "@/components/contactComponent";
import Image from "next/image";
import { motion } from "framer-motion";
import MenuItems from "@/components/menuItems";
const HomeComponentClient = () => {
  const [activeSection, setActiveSection] = useState("");
  const [showContact, setShowContact] = useState(false);
  const section1Ref = useRef<HTMLDivElement | null>(null);
  const section2Ref = useRef<HTMLDivElement | null>(null);
  const section3Ref = useRef<HTMLDivElement | null>(null);
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 h-screen pb-4 ${showContact ? "" : "lg:overflow-hidden overflow-scroll"} content`}
    >
      <div className="flex flex-col justify-between mt-16 lg:mx-24 mx-10">
        <motion.div
          className="p-6" // Add any additional styling here
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.5 }} // Adjust duration as needed
        >
          <h1 className="text-5xl text-white">Robert Chung</h1>
          <h2 className="text-xl mt-2 text-white">Full Stack Engineer</h2>
          <p className="text-lg mt-2 text-gray-400">
            I develop creative web experiences using my arsenal of technology
            and skills.
          </p>
          <MenuItems
            activeSection={activeSection}
            scrollToSection={scrollToSection}
            section1Ref={section1Ref}
            section2Ref={section2Ref}
            section3Ref={section3Ref}
          />
          {showContact ? (
            <div>
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    setShowContact(!showContact);
                  }}
                  className="rounded-lg bg-teal-600 text-teal-300 bg-opacity-25 p-2"
                >
                  Back
                </button>
              </div>
              <ContactComponent />
            </div>
          ) : (
            <div className="flex justify-center space-x-4 mb-10">
              <Link
                href="/Robert Chung Developer.pdf"
                download
                className="rounded-lg bg-teal-600 text-teal-300 bg-opacity-25 p-2 hover:bg-teal-700"
                target="_blank"
              >
                My Resume
              </Link>
              <button
                onClick={() => {
                  setShowContact(!showContact);
                }}
                className="rounded-lg bg-teal-600 text-teal-300 bg-opacity-25 p-2 hover:bg-teal-700"
              >
                Contact Me
              </button>
            </div>
          )}
        </motion.div>
        <div className="lg:mb-20 bg-gray-200 flex rounded-lg">
          <Link href={"https://github.com/RobertChung15"}>
            <Image
              src="/github.png"
              width={50}
              height={50}
              alt="github"
            ></Image>
          </Link>
          <Link href={"https://www.linkedin.com/in/robert-b-chung/"}>
            <Image
              src="/linkedin.png"
              width={50}
              height={50}
              alt="linkedIn"
            ></Image>
          </Link>
        </div>
      </div>
      <div className="flex justify-center mt-16 lg:overflow-y-auto">
        <div className="w-full">
          <div id="about" className="section" ref={section1Ref}>
            <AboutComponent />
          </div>
          <div id="experience" className="section" ref={section2Ref}>
            <ExperienceComponent />
          </div>
          <div id="projects" className="section" ref={section3Ref}>
            <ProjectComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponentClient;
