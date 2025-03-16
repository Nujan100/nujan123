import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="prose dark:prose-invert lg:prose-xl">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I am a passionate Full Stack Developer with expertise in building modern web applications.
              My journey in software development began with a strong foundation in computer science
              and has evolved through hands-on experience with various technologies and frameworks.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I specialize in creating responsive, user-friendly applications using React, Node.js,
              and cloud technologies. My approach combines clean code practices with efficient
              problem-solving to deliver high-quality solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source
              projects, and sharing my knowledge through technical writing and mentoring.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;