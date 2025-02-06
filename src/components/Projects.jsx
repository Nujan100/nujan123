import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="projects"
    >
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-item">Project 1</div>
        <div className="project-item">Project 2</div>
        <div className="project-item">Project 3</div>
      </div>
    </motion.section>
  );
};

export default Projects;