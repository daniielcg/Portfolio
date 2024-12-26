import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  metathesis,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
 
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
 
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
 
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "IT Summer Internship",
    company_name: "Metathesis",
    icon: metathesis,
    iconBg: "#383E56",
    date: "March 2024 - June 2024",
    points: [
      "Enhanced user experience on both of the company's websites by implementing new design elements, improving functionality, and resolving bugs to ensure seamless operations.",
      "Developed a Python program for automated data extraction from real estate listing sites, streamlining data collection and organization for faster and more effective market analysis.",
      "Supported the development and launch of a new website dedicated to property reservations.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "Daniel is a self-motivated, creative professional with advanced technical skills and a unique ability to work both independently and collaboratively. A true asset to any organization.",
    name: "Isabel Rodrigues",
    designation: "CEO",
    company: "MetaThesis",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQH8Tnh9hVfUbA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1607511978104?e=1740614400&v=beta&t=o0Qce8gd4id2vyR7jCZAcZeT_UXKb8fL11sOeRL765I",
  },
];

const projects = [
  {
    name: "BookSwap",
    description:
     "A web platform for exchanging books with a messaging system, post creation, and user authentication. Users can create and manage book listings, contact others for swaps, and navigate easily with a user-friendly interface, making book exchanging simple and accessible for everyone.",
    tags: [
     
    ],
    image: "https://cdn.leonardo.ai/users/82e584c7-7ec8-4856-800e-de9f791ffd42/generations/19daf10c-4f3d-4d7a-8458-bc71ccc0b774/Leonardo_Phoenix_09_Create_a_profile_image_or_slogan_for_the_w_3.jpg",
    source_code_link: "https://github.com/daniielcg/book-swap", 
    live_demo_link: "https://book-swap-silk.vercel.app/", 
  },
];

export { services, technologies, experiences, testimonials, projects };
