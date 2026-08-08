/**
 * projects.js — Portfolio project data
 * Update this file to add/edit projects without touching UI components.
 */

const projects = [
  {
    id: 1,
    title: "RestroBOPOS",
    description:
      "A restaurant billing and POS dashboard UI built in React. Focused on clean design, responsive layouts, and a modern user interface for restaurant operations.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/developershahil/restrobopos",
    live: null,
    image: `${import.meta.env.BASE_URL}images/restrobopos.png`,
    featured: true,
  },
  {
    id: 2,
    title: "Hotel Review",
    description:
      "A responsive hotel review management system designed to manage hotel data, customer feedback, and booking workflows through a clean and practical web interface.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Docker"],
    github: "https://github.com/developershahil/hotel-review",
    live: null,
    image: `${import.meta.env.BASE_URL}images/hotel-review.png`,
    featured: true,
  },
  {
    id: 3,
    title: "ColdReach-Gemini",
    description:
      "An AI-powered cold outreach tool leveraging Google Gemini to generate personalised, context-aware outreach messages for professional networking and sales prospecting.",
    technologies: ["JavaScript", "Google Gemini API", "HTML", "CSS"],
    github: "https://github.com/developershahil/ColdReach-Gemini",
    live: null,
    image: `${import.meta.env.BASE_URL}images/codereach.png`,
    featured: true,
  },
  {
    id: 4,
    title: "Financial Dashboard",
    description:
      "A modern React-based financial dashboard for tracking live stock prices, viewing price trends, and monitoring key market metrics with a clean and responsive interface.",
    technologies: [
      "React",
      "JavaScript",
      "CSS3",
      "ApexCharts",
      "Alpha Vantage API",
    ],
    github: "https://github.com/developershahil/financial-dashboard",
    live: null,
    image: `${import.meta.env.BASE_URL}images/financial-dashboard.png`,
    featured: false,
  },
  {
    id: 5,
    title: "Code Oven",
    description:
      "A web-based code editor platform for writing, editing, and previewing code with a modern interface designed for faster development and testing.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/developershahil/code-oven",
    live: null,
    image: `${import.meta.env.BASE_URL}images/CodeOven.png`,
    featured: false,
  },
];

export default projects;
