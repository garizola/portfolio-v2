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
      <p className="text-justify font-semibold text-sm mt-2">
        <button
          className="text-green-500 hover:italic hover:text-green-700"
          onClick={handleLightbox}
        >
          I'm
        </button>
        &nbsp;developer based in the
        <a
          href="https://en.wikipedia.org/wiki/Midwestern_United_States"
          className="text-yellow-400 hover:italic hover:text-yellow-500"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;Midwest&nbsp;
        </a>
        who specializes in building user interfaces. I also enjoy dabbling in
        backend/API development. You can see most of my work on my
        <a
          href="https://github.com/garizola"
          className="text-purple-400 hover:italic hover:text-purple-700"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;GitHub
        </a>
        . I graduated in May with two degrees one in Web Development and the
        other in Informatics. My most recent position was for
        <a
          href="https://hudl.com"
          className="text-orange-400 hover:italic hover:text-orange-600"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;Hudl&nbsp;
        </a>
        as a Web Development Intern. In my freetime I enjoy collecting, getting
        outdoors, and working with nflfastr to identify trends in the NFL. I am
        passionate about expanding my skills and experimenting with anything I
        can. If you'd like to work with me or just want to converse, feel free
        to
        <a
          href="https://contact-giovanni.vercel.app/"
          className="text-red-400 hover:italic hover:text-red-600"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;email&nbsp;me&nbsp;
        </a>
        or reach out to on
        <a
          href="https://www.linkedin.com/in/giovanniarizola/"
          className="text-blue-400 hover:italic hover:text-blue-600"
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
