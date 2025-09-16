"use client";
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { setActiveSection, toggleContact } from "../store/slices/uiSlice";
import AboutComponent from "@/components/aboutComponent";
import ExperienceComponent from "@/components/experienceComponent";
import ProjectComponent from "@/components/projectComponent";
import Link from "next/link";
import ContactComponent from "@/components/contactComponent";
import Image from "next/image";
import { motion } from "framer-motion";
import MenuItems from "@/components/menuItems";
import * as THREE from "three";

const HomeComponentClient = () => {
  const dispatch = useDispatch();
  const { activeSection, showContact } = useSelector((state: RootState) => state.ui);
  const section1Ref = useRef<HTMLDivElement | null>(null);
  const section2Ref = useRef<HTMLDivElement | null>(null);
  const section3Ref = useRef<HTMLDivElement | null>(null);
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

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
          dispatch(setActiveSection(entry.target.id));
        }
      });
    }, options);

    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => observer.observe(section));

    // Three.js stars setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#stars-bg") as HTMLCanvasElement,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    const stars: { mesh: THREE.Mesh; originalPos: THREE.Vector3 }[] = [];
    const mouse = new THREE.Vector2();
    // const raycaster = new THREE.Raycaster();

    function addStar() {
      const geometry = new THREE.SphereGeometry(0.1, 24, 24);
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, material);
      const [x, y] = Array(2)
        .fill(null)
        .map(() => THREE.MathUtils.randFloatSpread(200));
      star.position.set(x, y, 0);
      const originalPos = star.position.clone();
      scene.add(star);
      stars.push({ mesh: star, originalPos });
    }

    Array(200).fill(null).forEach(addStar);

    function onMouseMove(event: MouseEvent) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    window.addEventListener("mousemove", onMouseMove);

    function animate() {
      requestAnimationFrame(animate);

      const mouseWorldPos = new THREE.Vector2(mouse.x * 50, mouse.y * 50);

      stars.forEach(({ mesh, originalPos }) => {
        const material = mesh.material;

        // Check if material is an array or a single material
        if (Array.isArray(material)) {
          material.forEach((mat) => {
            if (mat instanceof THREE.MeshStandardMaterial) {
              // or your specific material type
              mat.opacity =
                0.5 +
                0.5 * Math.sin(Date.now() * 0.001 + mesh.position.x * 0.01);
              mat.transparent = true;
            }
          });
        } else if (material instanceof THREE.MeshStandardMaterial) {
          // or your specific material type
          material.opacity =
            0.5 + 0.5 * Math.sin(Date.now() * 0.001 + mesh.position.x * 0.01);
          material.transparent = true;
        }

        const starPos2D = new THREE.Vector2(mesh.position.x, mesh.position.y);
        const distance = starPos2D.distanceTo(mouseWorldPos);
        if (distance < 30) {
          const direction = new THREE.Vector2()
            .subVectors(starPos2D, mouseWorldPos)
            .normalize();
          const targetPos = originalPos
            .clone()
            .add(new THREE.Vector3(direction.x * 5, direction.y * 5, 0));
          mesh.position.lerp(targetPos, 0.1);
        } else {
          mesh.position.lerp(originalPos, 0.05);
        }
      });

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      renderer.dispose();
    };
  }, []);
  return (
    <div className="relative">
      <canvas
        id="stars-bg"
        className="fixed top-0 left-0 w-full h-full -z-10"
      ></canvas>
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
                      dispatch(toggleContact());
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
                    dispatch(toggleContact());
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
    </div>
  );
};

export default HomeComponentClient;
