import React from "react";
import { v4 as uuid } from "uuid";
import SingleProject from "../components/SingleProject";
import { projects } from "../data";

const Projects = () => {
  return (
    <div className="min-h-svh">
      <h3 className="font-extrabold text-lg mb-4 ">Selected Projects</h3>
      <div className="grid sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 gap-8">
        {projects.map((project) => (
          <SingleProject key={uuid()} project={project} />
        ))}
      </div>
      <p className="font-base text-sm mt-6 font-semibold">
        Check out my
        <a
          href="https://github.com/garizola"
          className="text-purple-400 hover:text-purple-600 hover:italic"
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
