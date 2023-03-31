import { v4 } from "uuid";

export const initialData = [
  {
    id: v4(),
    imgUrl: "InterviewMe",
    title: "Interview Me",
    summary:
      "Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview.",
    startDate: "2023-02-18",
    endDate: "2023-02-18",
    githubLink: "",
    otherLink: "",
    desc: "",
    hackathonName: "Oceanic Treasure Hunt",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    timestamp: new Date(new Date().getTime() - 6 * 24 * 60 * 60 * 1000),
  },
  {
    id: v4(),
    imgUrl: "Loremipsum",
    title: "Lorem Ipsum",
    summary:
      "Lorem ipsum dolor sit amet consectetur. Auctor nibh eleifend tempus egestas libero tristique nec.",
    startDate: "2023-02-18",
    endDate: "2023-02-18",
    githubLink: "",
    otherLink: "",
    desc: "",
    hackathonName: "Oceanic Treasure Hunt",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    timestamp: new Date(new Date().getTime() - 8 * 24 * 60 * 60 * 1000),
  },
  {
    id: v4(),
    imgUrl: "Potteripsum",
    title: "Potter Ipsum",
    summary:
      "Potter ipsum wand elf parchment wingardium. Ghost glass hall tears hair must train. Snape alohamora bathrooms.",
    startDate: "2023-02-18",
    endDate: "2023-02-18",
    githubLink: "",
    otherLink: "",
    desc: "",
    hackathonName: "Oceanic Treasure Hunt",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    timestamp: new Date(new Date().getTime() - 9 * 24 * 60 * 60 * 1000),
  },
  {
    id: v4(),
    imgUrl: "PizzaIpsum",
    title: "Pizza Impsum",
    summary: "Pizza ipsum dolor meat lovers buffalo. Burnt melted NY.",
    startDate: "2023-02-18",
    endDate: "2023-02-18",
    githubLink: "",
    otherLink: "",
    desc: "",
    hackathonName: "Oceanic Treasure Hunt",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    timestamp: new Date(new Date().getTime() - 12 * 24 * 60 * 60 * 1000),
  },
  {
    id: v4(),
    imgUrl: "Figmaipsum",
    title: "Figma Ipsum",
    summary:
      "Figma ipsum component variant main layer. Blur hand object thumbnail subtract flows font bold image. Font.",
    startDate: "2023-02-18",
    endDate: "2023-02-18",
    githubLink: "",
    otherLink: "",
    desc: "",
    hackathonName: "Oceanic Treasure Hunt",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    timestamp: new Date(new Date().getTime() - 16 * 24 * 60 * 60 * 1000),
  },
  {
    id: v4(),
    imgUrl: "Officeipsum",
    title: "Office Ipsum",
    summary: "Office ipsum you must be muted.",
    startDate: "2023-02-18",
    endDate: "2023-02-18",
    githubLink: "",
    otherLink: "",
    desc: "",
    hackathonName: "Oceanic Treasure Hunt",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    timestamp: new Date(new Date().getTime() - 28 * 24 * 60 * 60 * 1000),
  },
];

export const getSubmissionById = (id) => {
  const submissionData = JSON.parse(localStorage.getItem("submissionData"));
  const userSubmission = submissionData.find((sub) => sub.id === id);
  return userSubmission;
};
