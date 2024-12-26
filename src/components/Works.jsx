import React from "react";
import { FaGithub, FaEye } from "react-icons/fa"; // Importando ícones do Font Awesome

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({ name, description, tags, image, source_code_link, live_demo_link }) => {
  return (
    <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
      <div className="relative w-full h-[230px] group">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />

        {/* Overlay com efeito de desfocagem e botões */}
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Botões GitHub e Live Demo lado a lado */}
          <div className="flex gap-4">
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#4b0082] to-[#8a2be2] text-white px-4 py-2 rounded-full hover:bg-opacity-80 flex items-center justify-center"
            >
              <FaGithub className="mr-2" /> Code
            </a>
            <a
              href={live_demo_link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#4b0082] to-[#8a2be2] text-white px-4 py-2 rounded-full hover:bg-opacity-80 flex items-center justify-center"
            >
              <FaEye className="mr-2" /> Demo
            </a>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
