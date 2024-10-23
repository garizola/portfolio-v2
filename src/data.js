const header = {
  // all the properties are optional - can be left empty or deleted
  name: "Giovanni Arizola",
  role: "Web Developer",
  description:
    "Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.",
  resume:
    "https://firebasestorage.googleapis.com/v0/b/ga-storage.appspot.com/o/project-images%2Fga-current-resume-11_26.pdf?alt=media&token=7802da99-a2d3-486f-825a-9046872aa771",
  social: {
    github: "https://github.com/garizola",
    linkedin: "https://www.linkedin.com/in/giovanniarizola",
  },
};

const projects = [
  {
    name: "Hudl Landing Page Example",
    number: 1,
    description: "",
    stack: " Custom Craft CMS, Tailwind",
    img: "https://firebasestorage.googleapis.com/v0/b/ga-storage.appspot.com/o/project-images%2Ffan_solutions_sr.gif?alt=media&token=f5b63864-0671-42f6-8ef5-b0b0a49acd81",
    livePreview: "https://www.hudl.com/solutions/fan",
  },
  {
    name: "Speak In Silence (WIP)",
    number: "2 ",
    description: "",
    stack: " React, Tailwind, Rails, Postgres",
    img: "https://firebasestorage.googleapis.com/v0/b/ga-storage.appspot.com/o/project-images%2FScreenshot%202024-10-22%20at%2010.33.15%E2%80%AFPM.png?alt=media&token=ee8c19f9-927d-4a46-857e-bd5d705f4e61",
    livePreview: "https://speak-in-silence.netlify.app/",
  },
  {
    name: "Dormee (WIP)",
    number: 3,
    description: "",
    stack: " React, Firebase Auth, Firestore",
    img: "https://firebasestorage.googleapis.com/v0/b/ga-storage.appspot.com/o/project-images%2FScreenshot%202024-04-26%20at%2011.23.12%E2%80%AFAM.png?alt=media&token=18815823-c9c6-4ae8-9139-7178895d2725",
    sourceCode: "https://github.com/garizola/n423-final",
    livePreview: "https://dormee.netlify.app/",
  },

  {
    name: "Omega Fitness",
    number: 4,
    description:
      "This application empowers users to effortlessly search for exercises by specifying a body part, a specific exercise, or a target muscle group, enabling them to discover a variety of similar workouts. Upon selecting an exercise, users are presented with curated YouTube tutorials, offering step-by-step guidance for each selected workout.",
    img: "https://firebasestorage.googleapis.com/v0/b/ga-storage.appspot.com/o/project-images%2FomegaFitness2024.png?alt=media&token=e07c9e1d-ccde-4f2b-802e-ee66249fdc53",
    stack: " React, Axios w/ public APIs, Material UI",
    sourceCode:
      "https://github.com/garizola/omega-fitness-react#react-fitness-app",
    livePreview: "https://omegafitness.netlify.app/",
  },
  // {
  //   name: "Organized Messaging App",
  //   number: 4,
  //   description:
  //     "A real-time messaging application that enables users to organize conversations by topics, making it effortless to locate specific messages without the need to scroll through endless texts. I am currently enhancing the platform with features that allow users to add friends and engage in private conversations, ensuring a more personalized and secure user\u00a0experience.",
  //   stack: ["React", "Firebase Auth", "Firestore"],
  //   img: "https://firebasestorage.googleapis.com/v0/b/ga-storage.appspot.com/o/project-images%2Fn423FinalSS.png?alt=media&token=6588bc33-46db-4eea-9801-41be5fb53ff2",
  //   sourceCode: "https://github.com/garizola/n423-final",
  //   livePreview: "https://temp-title.web.app/",
  // },
];

export { header, projects };
