"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectTag from "./ProjectTag";
import ProjectCard from "./ProjectCard";
import { projectsData } from "./projectsData";

function ProjectsSection() {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="px-4 md:px-8 lg:px-16 py-16 bg-gray-800">
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-8 md:mb-12">
          My Projects
        </h2>

        {/* Tag Filter Buttons */}
        <div className="text-center flex justify-center gap-4 md:gap-6 mb-8 md:mb-12">
          {["All", "Web",].map((category) => (
            <ProjectTag
              key={category}
              onClick={handleTagChange}
              name={category}
              isSelected={tag === category}
            />
          ))}
        </div>
      </motion.section>

      {/* Project Cards Grid */}
      <ul
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectsSection;
