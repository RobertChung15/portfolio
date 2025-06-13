import React, { useState } from "react";

const ContactComponent = () => {
  const [details, setDetails] = useState({ name: "", email: "", message: "" });

  return (
    <div className="border border-gray-300 rounded-lg p-6 my-4">
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
          type="submit"
          className="rounded-lg bg-teal-600 text-teal-300 bg-opacity-25 p-2 hover:bg-blue-600 hover:text-white transition duration-200"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactComponent;
