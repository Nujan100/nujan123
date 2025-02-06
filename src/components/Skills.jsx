import React, { useEffect, useRef } from 'react';

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
          entry.target.classList.add('fade-in');
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
      className="card"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-primary mb-4">{title}</h3>
      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill, index) => (
          <div 
            key={skill}
            className="flex items-center"
          >
            <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
            <span className="text-light">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

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
    <section id="skills" className="section" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-8">
          <h2>Technical Skills</h2>
          <p className="text-light">
            Here are the technologies and tools I work with
          </p>
        </div>

        <div className="grid">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className={`slide-in-${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ 
                animationDelay: `${index * 200}ms`,
                animationPlayState: isVisible ? 'running' : 'paused'
              }}
            >
              <SkillCard 
                title={category.title} 
                skills={category.skills} 
                delay={index * 100}
              />
            </div>
          ))}
        </div>

        {/* Skill Level Indicators */}
        <div className="mt-8">
          <h3 className="text-center mb-4">Proficiency Levels</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Beginner', 'Intermediate', 'Advanced', 'Expert'].map((level, index) => (
              <div 
                key={level}
                className="card text-center"
                style={{ 
                  animationDelay: `${(index + skillCategories.length) * 100}ms`,
                  animationPlayState: isVisible ? 'running' : 'paused'
                }}
              >
                <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                  <div 
                    className="absolute top-0 left-0 h-full bg-primary"
                    style={{ 
                      width: `${(index + 1) * 25}%`,
                      transition: 'width 1s ease-out',
                    }}
                  ></div>
                </div>
                <span className="text-light">{level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-8 text-center">
          <p className="text-light">
            Additionally, I have experience with Agile methodologies, team leadership,
            and project management tools like Jira and Trello.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;