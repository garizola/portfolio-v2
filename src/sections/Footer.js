import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="mt-[33vh] w-full flex justify-between font-semibold">
      <div className="flex gap-3">
        {/* <p className="font-bold">2024</p> */}
        <p>Giovanni Arizola</p>
      </div>
      <a href="#" className=" text-green-500 hover:text-green-600 hover:italic">
        Feedback Board
      </a>
      <div className="flex gap-3 text-lg">
        <a
          href="https://github.com/garizola"
          className="text-purple-400 hover:text-purple-700"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/giovanniarizola/"
          className="text-blue-400 hover:text-blue-600"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://contact-giovanni.vercel.app/"
          className="text-gray-400  hover:text-gray-600"
        >
          <IoMdMail />
        </a>
      </div>
    </div>
  );
};

export default Footer;