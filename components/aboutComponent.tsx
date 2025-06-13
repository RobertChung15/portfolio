import Image from "next/image";
import React from "react";

const AboutComponent = () => {
  return (
    <div className="my-2 mx-16 text-sm text-gray-300">
      <p className="pb-2">
        I am a creative developer who loves to design and develop interesting
        digital experiences with simplicity in mind. I particularly enjoy
        learning about new technology and seeing how I can incorporate it into
        my new projects or revamping exisiting projects.
      </p>
      <p className="pb-2">
        Currently I am a{" "}
        <span className="text-white font-bold">Software Engineer</span> at Hong
        Kong Center For Cerebro-Cardiovascular Health Engineering where I have
        built and maintained a{" "}
        <span className="text-white font-bold">database</span> that houses the
        clinical data that the project teams have collected through clinical
        trials ensuring that data is secure behind appropriate levels of{" "}
        <span className="text-white font-bold">security</span> while also
        maintainable for our users to be able to use for training AI models or
        conducting research at the center.
      </p>
      <p className="pb-2">
        Previously, I have worked in multiple roles in HSBC from Digital
        Marketing to Software Engineering using frameworks like{" "}
        <span className="text-white font-bold">Angular</span> to enhance a UI
        from an existing Home and Away Page or platforms such as
        <span className="text-white font-bold">Salesforce</span> and{" "}
        <span className="text-white font-bold">Adobe Experience Manager</span>{" "}
        to segment certain audiences to advertise difference products in
        multiple different countries.
      </p>
      <p className="pb-2">
        In my spare time, I love playing and creating video games. Currently,
        learning <span className="text-white font-bold">Godot</span> and
        creating a card game based on Karuta which is a card matching game
      </p>
      <div>
        <h3 className="text-lg text-white">My Tech Stack</h3>
        <h4 className="text-lg text-white">Languages</h4>
        <div className="grid grid-cols-3 mx-20 my-5">
          <div className="flex justify-center items-center">
            {" "}
            <Image
              src="/ts.png"
              width={80}
              height={80}
              alt="typescript"
            ></Image>
          </div>
          <div className="flex justify-center items-center">
            {" "}
            <Image
              src="/python-logo.png"
              width={100}
              height={100}
              alt="typescript"
            ></Image>
          </div>
          <div className="flex justify-center items-center">
            {" "}
            <Image
              src="/java.png"
              width={50}
              height={50}
              alt="typescript"
            ></Image>
          </div>
        </div>
        <h4 className="text-lg text-white">Platforms</h4>
        <div className="grid grid-cols-4 bg-blue-50 px-2 rounded py-2 space-y-1">
          <div className="flex justify-center items-center">
            <Image
              src="/next.png"
              width={100}
              height={100}
              alt="typescript"
            ></Image>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/react1.png"
              width={100}
              height={100}
              alt="typescript"
            ></Image>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/aws.png"
              width={100}
              height={100}
              alt="typescript"
            ></Image>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/github.png"
              width={100}
              height={100}
              alt="typescript"
            ></Image>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/mongo.png"
              width={100}
              height={100}
              alt="typescript"
            ></Image>
          </div>

          <div className="flex justify-center items-center">
            <Image
              src="/aem.png"
              width={100}
              height={100}
              alt="typescript"
            ></Image>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/salesforce.png"
              width={100}
              height={100}
              alt="typescript"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
