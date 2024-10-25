import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="pt-[20px] w-full flex justify-between text-xs sm:text-base font-base">
      <div className="flex gap-3">
        {/* <p className="font-bold">2024</p> */}
        <p>Giovanni Arizola</p>
      </div>
      <a
        href="https://give-me-feedback.netlify.app/"
        className=" text-[#98c379] hover:italic hover:font-bold"
        target="_blank"
        rel="noreferrer"
      >
        Feedback Board
      </a>
      <div className="flex gap-3 text-lg">
        <a
          href="https://github.com/garizola"
          className="text-[#c678dd] hover:text-purple-300"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/giovanniarizola/"
          className="text-[#61afef] hover:text-blue-300"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://contact-giovanni.vercel.app/"
          className="text-gray-400  hover:text-gray-600"
          target="_blank"
          rel="noreferrer"
        >
          <IoMdMail />
        </a>
      </div>
    </div>
  );
};

export default Footer;
