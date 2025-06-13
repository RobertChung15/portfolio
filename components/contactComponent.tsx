import React, { useState } from "react";
import Image from "next/image";
const ContactComponent = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showGif, setShowGif] = useState(false);
  const server = process.env.NEXT_PUBLIC_URL;
  const sendEmail = async () => {
    const response = await fetch(server + "/api/sendContactEmail", {
      method: "POST",
      body: JSON.stringify(details),
    });

    if (response.ok) {
      setShowGif(true);
      setDetails({ name: "", email: "", subject: "", message: "" });
    }
  };

  const handleGifEnd = () => {
    setShowGif(false);
  };
  return (
    <div className="border border-gray-300 rounded-lg p-6 my-4">
      {showGif ? (
        <div className="flex justify-center">
          <Image
            height={200}
            width={200}
            src="/sendEmail.gif"
            alt="Email Sent"
            className="w-1/2"
            onLoad={() => setTimeout(handleGifEnd, 2000)} // Adjust duration based on GIF length
          />
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>

          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name:
          </label>
          <input
            onChange={(e) => {
              setDetails({ ...details, name: e.target.value });
            }}
            type="text"
            className="border border-gray-300 rounded-lg p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
          />

          <label className="block text-sm font-medium text-gray-700 mb-1">
            Subject:
          </label>
          <input
            onChange={(e) => {
              setDetails({ ...details, subject: e.target.value });
            }}
            type="text"
            className="border border-gray-300 rounded-lg p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
          />

          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email:
          </label>
          <input
            onChange={(e) => {
              setDetails({ ...details, email: e.target.value });
            }}
            type="email"
            className="border border-gray-300 rounded-lg p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />

          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message:
          </label>
          <textarea
            onChange={(e) => {
              setDetails({ ...details, message: e.target.value });
            }}
            className="border border-gray-300 rounded-lg p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your message"
          />

          <div className="flex justify-end">
            <button
              onClick={sendEmail}
              type="button"
              className="rounded-lg bg-teal-600 text-teal-300 bg-opacity-25 p-2 hover:bg-blue-600 hover:text-white transition duration-200"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactComponent;
