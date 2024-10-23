import React from "react";

const SingleProject = ({ project }) => {
  return (
    <div className="p-2 px-4 border-2 border-black ">
      <span className="font-bold">{project.number}</span>
      <div className="h-fit ">
        <a
          target="_blank"
          rel="noreferrer"
          href={project.livePreview}
          className="flex items-center justify-around p-6"
        >
          <img
            src={project.img}
            className="aspect-video m-auto border-2 border-black hover:border-gray-400 hover:border-[5px]"
          />
        </a>
      </div>
      <div className="sm:flex w-full  items-center">
        <a href="{project.livePreview}" className="font-bold hover:italic">
          {project.name}:
        </a>
        <span className="sm:inline">&nbsp;</span>
        <p className="text-sm">{project.stack}</p>
      </div>
    </div>
  );
};

export default SingleProject;
