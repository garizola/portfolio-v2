import React from "react";
import { v4 as uuid } from "uuid";
import SingleProject from "../components/SingleProject";
import { projects } from "../data";
import { bucksblog } from "../data";

const Projects = () => {
  console.log(projects);
  return (
    <div className="sm:h-auto h-[75vh] ">
      <h3 className="font-extrabold text-lg sm:mb-4 mb-2">Selected Projects</h3>
      <div className="grid sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 sm:gap-8 gap-2">
        <div className="sm:col-span-2">
          <SingleProject key={uuid()} project={bucksblog} />
        </div>
        {projects.map((project) => (
          <SingleProject key={uuid()} project={project} />
        ))}
      </div>
      <p className="font-base text-xs sm:text-sm mt-6 ">
        Check out my
        <a
          href="https://github.com/garizola"
          className="text-[#c678dd] hover:italic hover-bold"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;GitHub&nbsp;
        </a>
        for other projects. More cool stuff coming soon.
      </p>
    </div>
  );
};

export default Projects;
