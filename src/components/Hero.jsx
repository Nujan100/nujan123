import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div 
        ref={elementRef}
        className="text-center px-4 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          <span className="block">Hi, I'm </span>
          <span className="block text-indigo-600 dark:text-indigo-400">Nujan Shrestha</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          This is a basic testing.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#contact"
            className="px-8 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 
                     transition-colors duration-300"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="px-8 py-3 text-lg font-medium text-indigo-600 dark:text-indigo-400 border-2 
                     border-indigo-600 dark:border-indigo-400 rounded-lg hover:bg-indigo-50 
                     dark:hover:bg-gray-800 transition-colors duration-300"
          >
            View Work
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;