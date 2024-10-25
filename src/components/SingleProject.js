import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const SingleProject = ({ project }) => {
  return (
    <div className="px-2 py-1 sm:py-2 border  border-[#abb2bf] hover:text-[#56b6c2] hover:border-[#98c379] duration-150 ease-in-out  text-sm sm:text-base w-full ">
      <a
        className="flex gap-2 hover:text-[#e5c07b] sm:pb-1 pb-0 hover:italic duration-150 ease-in-out justify-between"
        href={project.livePreview}
        target="_blank"
        rel="noreferrer"
      >
        <h4 className="sm:text-base  text-sm font-bold ">{project.name}</h4>
        <span className="sm:pt-0 pt-1">
          <MdArrowOutward />
        </span>
      </a>
      <div className="flex text-xs justify-between mt-2 sm:pb-0 pb-1">
        <p>{project.stack}</p>
        <a
          href={project.sourceCode}
          className="text-base hover:text-purple-300"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default SingleProject;
