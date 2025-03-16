import React from 'react';

const Skills = () => {
  const skills = {
    frontend: [
      { name: 'React', level: 'Advanced' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'HTML5', level: 'Advanced' },
      { name: 'CSS3', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
    ],
    backend: [
      { name: 'Node.js', level: 'Advanced' },
      { name: 'Express.js', level: 'Advanced' },
      { name: 'MongoDB', level: 'Intermediate' },
      { name: 'SQL', level: 'Intermediate' },
      { name: 'RESTful APIs', level: 'Advanced' },
    ],
    tools: [
      { name: 'Git', level: 'Advanced' },
      { name: 'Docker', level: 'Intermediate' },
      { name: 'AWS', level: 'Intermediate' },
      { name: 'VS Code', level: 'Advanced' },
      { name: 'Figma', level: 'Intermediate' },
    ],
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Frontend
            </h3>
            <ul className="space-y-3">
              {skills.frontend.map((skill) => (
                <li key={skill.name} className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">{skill.name}</span>
                  <span className="text-sm text-blue-600 dark:text-blue-400">{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Backend Skills */}
          <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Backend
            </h3>
            <ul className="space-y-3">
              {skills.backend.map((skill) => (
                <li key={skill.name} className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">{skill.name}</span>
                  <span className="text-sm text-blue-600 dark:text-blue-400">{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Tools & Others
            </h3>
            <ul className="space-y-3">
              {skills.tools.map((skill) => (
                <li key={skill.name} className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">{skill.name}</span>
                  <span className="text-sm text-blue-600 dark:text-blue-400">{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;