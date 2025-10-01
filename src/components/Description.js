import React, { useState } from "react";
import { Lightbox } from "react-modal-image";

import "../App.css";

const Description = () => {
  const [open, setOpen] = useState(false);
  const handleLightbox = () => {
    setOpen(!open);
  };
  return (
    <div>
      <p className="text-justify font-base sm:text-sm text-xs mt-2 sm:leading-4.5 leading-4.25">
        <button
          className="text-[#98c379] hover:italic hover:font-bold "
          onClick={handleLightbox}
        >
          I'm&nbsp;
        </button>
        a developer based in the
        <a
          href="https://en.wikipedia.org/wiki/Midwestern_United_States"
          className="text-[#e5c07b] hover:italic hover:font-bold"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;Midwest
        </a>
        , specializing in building data-driven web application. You can see most
        of my personal projects on my
        <a
          href="https://github.com/garizola"
          className="text-[#c678dd] hover:italic hover:font-bold"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;GitHub
        </a>
        . I graduated in 2024 with two degrees: one in Web Development and the
        other in Informatics. I currently work as a Web Developer at
        <a
          href="https://customwheeloffset.com"
          className="text-green-400 hover:italic hover:font-bold"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;Custom&nbsp;Offsets
        </a>
        . Before my current role, I worked was as a Web Development Intern at
        <a
          href="https://hudl.com"
          className="text-orange-400 hover:italic hover:font-bold"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;Hudl
        </a>
        . In my freetime, I enjoy collecting, being outdoors, CrossFit, and
        working on side projects. I am passionate about expanding my skills and
        experimenting with anything I can. If you'd like to collaborate or just
        want to chat, feel free to
        <a
          href="https://contact-giovanni.vercel.app/"
          className="text-[#e06c75] hover:italic hover:font-bold"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;email&nbsp;me&nbsp;
        </a>
        or connect with me on
        <a
          href="https://www.linkedin.com/in/giovanniarizola/"
          className="text-[#61afef] hover:italic hover:font-bold"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;LinkedIn
        </a>
        .{/* . I would be happy to hear from you. */}
      </p>

      {open && (
        <Lightbox
          small={
            "https://firebasestorage.googleapis.com/v0/b/ga-storage.appspot.com/o/project-images%2FIMG_8503-2%20(1).png?alt=media&token=243c9260-05ec-4b6a-be5b-b41db8e814a2"
          }
          medium={
            "https://firebasestorage.googleapis.com/v0/b/ga-storage.appspot.com/o/project-images%2FIMG_8503-2%20(1).png?alt=media&token=243c9260-05ec-4b6a-be5b-b41db8e814a2"
          }
          className={"modalImage"}
          onClose={handleLightbox}
          hideZoom={true}
          hideDownload={true}
        />
      )}
    </div>
  );
};

export default Description;
