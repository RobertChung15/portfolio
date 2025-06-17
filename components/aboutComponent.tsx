import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import React from "react";

const AboutComponent = () => {
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50, // Start slightly below
    },
    visible: {
      opacity: 1,
      y: 0, // End position
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };
  return (
       <motion.div
      className="my-2 mx-16 text-sm text-gray-300"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p variants={itemVariants} className="pb-2">
        I am a creative developer who loves to design and develop interesting
        digital experiences with simplicity in mind. I particularly enjoy
        learning about new technology and seeing how I can incorporate it into
        my new projects or revamping existing projects.
      </motion.p>
      <motion.p variants={itemVariants} className="pb-2">
        Currently, I am a{" "}
        <span className="text-white font-bold">Software Engineer</span> at Hong
        Kong Center For Cerebro-Cardiovascular Health Engineering where I have
        built and maintained a{" "}
        <span className="text-white font-bold">database</span> that houses the
        clinical data that the project teams have collected through clinical
        trials ensuring that data is secure behind appropriate levels of{" "}
        <span className="text-white font-bold">security</span> while also
        maintainable for our users to be able to use for training AI models or
        conducting research at the center.
      </motion.p>
      <motion.p variants={itemVariants} className="pb-2">
        Previously, I have worked in multiple roles in HSBC from Digital
        Marketing to Software Engineering using frameworks like{" "}
        <span className="text-white font-bold">Angular</span> to enhance a UI
        from an existing Home and Away Page or platforms such as {" "}
        <span className="text-white font-bold">Salesforce</span> and{" "}
        <span className="text-white font-bold">Adobe Experience Manager</span>{" "}
        to segment certain audiences to advertise different products in
        multiple different countries.
      </motion.p>
      <motion.p variants={itemVariants} className="pb-2">
        In my spare time, I love playing and creating video games. Currently,
        learning <span className="text-white font-bold">Godot</span> and
        creating a card game based on Karuta which is a card matching game.
      </motion.p>
      <div>
        <h3 className="text-lg text-white">My Tech Stack</h3>
        <h4 className="text-lg text-white">Languages</h4>
        <motion.div
          className="grid grid-cols-3 mx-20 my-5"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex justify-center items-center" variants={itemVariants}>
            <Image
              src="/ts.png"
              width={80}
              height={80}
              alt="TypeScript"
            />
          </motion.div>
          <motion.div className="flex justify-center items-center" variants={itemVariants}>
            <Image
              src="/python-logo.png"
              width={100}
              height={100}
              alt="Python"
            />
          </motion.div>
          <motion.div className="flex justify-center items-center" variants={itemVariants}>
            <Image
              src="/java.png"
              width={50}
              height={50}
              alt="Java"
            />
          </motion.div>
        </motion.div>
        <h4 className="text-lg text-white">Platforms</h4>
        <motion.div
          className="grid grid-cols-4 bg-blue-50 px-2 rounded py-2 space-y-1"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex justify-center items-center" variants={itemVariants}>
            <Image
              src="/next.png"
              width={100}
              height={100}
              alt="Next.js"
            />
          </motion.div>
          <motion.div className="flex justify-center items-center" variants={itemVariants}>
            <Image
              src="/react1.png"
              width={100}
              height={100}
              alt="React"
            />
          </motion.div>
          <motion.div className="flex justify-center items-center" variants={itemVariants}>
            <Image
              src="/aws.png"
              width={100}
              height={100}
              alt="AWS"
            />
          </motion.div>
          <motion.div className="flex justify-center items-center" variants={itemVariants}>
            <Image
              src="/github.png"
              width={100}
              height={100}
              alt="GitHub"
            />
          </motion.div>
          <motion.div className="flex justify-center items-center" variants={itemVariants}>
            <Image
              src="/mongo.png"
              width={100}
              height={100}
              alt="MongoDB"
            />
          </motion.div>

          <motion.div className="flex justify-center items-center" variants={itemVariants}>
            <Image
              src="/aem.png"
              width={100}
              height={100}
              alt="Adobe Experience Manager"
            />
          </motion.div>
          <motion.div className="flex justify-center items-center" variants={itemVariants}>
            <Image
              src="/salesforce.png"
              width={100}
              height={100}
              alt="Salesforce"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutComponent;
