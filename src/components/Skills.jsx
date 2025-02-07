import React, { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js', 'Vue.js']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Python', 'Java', 'Express', 'Django', 'PostgreSQL', 'MongoDB', 'REST APIs']
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack', 'Linux', 'Agile']
  },
  {
    title: 'Design',
    skills: ['Figma', 'Adobe XD', 'UI/UX', 'Responsive Design', 'Wireframing', 'Prototyping']
  }
];

const SkillCard = ({ title, skills, delay }) => {
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
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg opacity-0 translate-y-8 transition-all duration-700 ease-out"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">{title}</h3>
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill) => (
          <div 
            key={skill}
            className="flex items-center space-x-2"
          >
            <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
            <span className="text-gray-700 dark:text-gray-300 text-sm">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="skills" 
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are the technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={category.title}
              title={category.title} 
              skills={category.skills} 
              delay={index * 100}
            />
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            Proficiency Levels
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Beginner', 'Intermediate', 'Advanced', 'Expert'].map((level, index) => (
              <div 
                key={level}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg"
              >
                <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                  <div 
                    className="absolute top-0 left-0 h-full bg-blue-600 dark:bg-blue-400 transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible ? `${(index + 1) * 25}%` : '0%',
                    }}
                  ></div>
                </div>
                <p className="text-center text-sm text-gray-600 dark:text-gray-300 font-medium">
                  {level}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Additionally, I have experience with Agile methodologies, team leadership,
            and project management tools like Jira and Trello.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;