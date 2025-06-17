"use client"
import React, { useEffect, useState, useRef } from "react";
import AboutComponent from "@/components/aboutComponent";
import ExperienceComponent from "@/components/experienceComponent";
// import ProjectComponent from "@/components/projectComponent";
import Link from "next/link";
import ContactComponent from "@/components/contactComponent";
import Image from "next/image";

const HomeComponentClient = () => {
  const [activeSection, setActiveSection] = useState("");
  const [showContact, setShowContact] = useState(false);
  const section1Ref = useRef<HTMLDivElement | null>(null);
  const section2Ref = useRef<HTMLDivElement | null>(null);
  // const section3Ref = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
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
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen lg:overflow-hidden overflow-scroll">
      <div className="flex flex-col justify-between mt-24 lg:mx-24 mx-10">
        <div className="">
          <h1 className="text-5xl text-white">Robert Chung</h1>
          <h2 className="text-xl mt-2 text-white">Full Stack Engineer</h2>
          <p className="text-lg mt-2 text-gray-400">
            I develop creative web experience using my arsenal of technology and
            skills
          </p>
          <ul className="mt-4 list-disc">
            <li
              className={
                activeSection === "about"
                  ? "font-normal text-white"
                  : "text-gray-500"
              }
            >
              <span className="h-2 w-2 bg-white rounded-full mr-2"></span>
              <button onClick={() => scrollToSection(section1Ref)}>
                About
              </button>
            </li>
            <li
              className={
                activeSection === "experience"
                  ? "font-normal text-white"
                  : "text-gray-500"
              }
            >
              <span className="h-2 w-2 bg-white rounded-full mr-2"></span>
              <button onClick={() => scrollToSection(section2Ref)}>
                Experience
              </button>
            </li>
            {/* <li
              className={
                activeSection === "projects"
                  ? "font-normal text-white"
                  : "text-gray-500"
              }
            >
              <span className="h-2 w-2 bg-white rounded-full mr-2"></span>
              <button onClick={() => scrollToSection(section3Ref)}>
                Projects
              </button>
            </li> */}
          </ul>
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
              <ContactComponent></ContactComponent>
            </div>
          ) : (
            <div className="flex justify-center space-x-4 mb-10">
              <Link
                href="/Robert Chung Developer.pdf"
                download
                className="rounded-lg bg-teal-600 text-teal-300 bg-opacity-25 p-2"
                target="_blank"
              >
                Download the PDF
              </Link>
              <button
                onClick={() => {
                  setShowContact(!showContact);
                }}
                className="rounded-lg bg-teal-600 text-teal-300 bg-opacity-25 p-2"
              >
                Contact Me
              </button>
            </div>
          )}
        </div>
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
      <div className="flex justify-center mt-24 lg:overflow-y-auto">
        <div className="w-full">
          <div id="about" className="section" ref={section1Ref}>
            <AboutComponent />
          </div>
          <div id="experience" className="section" ref={section2Ref}>
            <ExperienceComponent />
          </div>
          {/* <div id="projects" className="section"  ref={section3Ref}>
            <ProjectComponent />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomeComponentClient;
