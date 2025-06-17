import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectComponent = () => {
  const projects = [
    {
      title: "Karuta",
      background:
        "Based on the japanese card game karuta it is using nursery rhymes on the cards and the player will have to match the corresponding poem to the poem on the card",
      frameworks: ["Godot", "GDScript"],
      image: "/karuta.png",
      git: "https://github.com/RobertChung15/karuta"
    },
    {
      title: "Portfolio V2",
      background:
        "This is the website you are currently viewing, it's using Next js and Resend to send emails through the contact form",
      link: "https://robert-b-chung.vercel.app/",
      frameworks: ["Next JS", "Resend", "Framer-Motion"],
      image: "/home.png",
      git: "https://github.com/RobertChung15/portfolio"
    },
    {
      title: "Portfolio V1",
      background:
        "This was my first attempt at creating a portfolio website, use a No SQL DB firebase to store blog posts and images",
      frameworks: ["Angular", "Firebase"],
      github: "",
      link: "https://roots-of-unity.web.app",
      image: "/roots.png",
      git: "https://github.com/RobertChung15/Roots-Of-Unity"
    },
  ];

  return (
    <div className="my-2 mx-16">
      <h3 className="text-lg">Projects</h3>
      <div>
        {projects.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-3  p-2 rounded-lg hover:bg-gray-700 hover:border border-white"
          >
            <div className="col-span-1 rounded-lg flex items-center justify-center">
              <Image
                src={project.image}
                width={200}
                height={50}
                alt={project.title}
              ></Image>
            </div>
            <div className="col-span-2 p-2">
              <h3 className="text-white">{project.title}</h3>
              <p className="text-sm text-gray-500">{project.background}</p>
              <div className="py-2">
                <ul className="mt-2 flex flex-wrap">
                  {project.frameworks.map((frame, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-teal-300 text-teal-300 rounded-lg text- p-2 m-2 text-sm bg-opacity-25 font-medium"
                      >
                        {frame}
                      </li>
                    );
                  })}

                  <li className="flex justify-end items-center">
                    <Link href={project.git} target="_blank">
                      <Image
                        src="/github.png"
                        width={20}
                        height={20}
                        alt="github"
                      ></Image>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectComponent;
