import React, { useRef, useEffect } from 'react';

const projectData = [
  {
    title: "Project One",
    description: "A modern web application built with React and Node.js. Features include user authentication, real-time updates, and responsive design.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/api/placeholder/600/400",
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project Two",
    description: "An e-commerce platform with advanced filtering, shopping cart functionality, and secure payment integration.",
    tech: ["Next.js", "PostgreSQL", "Stripe", "TypeScript"],
    image: "/api/placeholder/600/400",
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project Three",
    description: "A real-time dashboard for monitoring and visualizing data, featuring interactive charts and customizable widgets.",
    tech: ["Vue.js", "Express", "D3.js", "Redis"],
    image: "/api/placeholder/600/400",
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com",
  }
];

const ProjectCard = ({ project, delay }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden opacity-0 translate-y-8 transition-all duration-700 ease-out group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex justify-end space-x-2">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/90 text-gray-900 rounded-lg text-sm font-medium hover:bg-white transition-colors"
            >
              Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-900/90 text-white rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full dark:bg-blue-900 dark:text-blue-100"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent works
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;