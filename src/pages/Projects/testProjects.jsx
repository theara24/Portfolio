import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'C/C++',
    description:
      'A project showcasing advanced problem-solving using C/C++ programming.',
    src: '/src/assets/images/cpp-project.jpg', // Correct image path
    color: '#007ACC', // Blue color for C/C++
    githubLink: 'https://github.com/your-repo/cpp-project', // Replace with your GitHub repo link
    liveLink: 'https://example.com/cpp-project', // Replace with the live project link
  },
  {
    title: 'Easy Found (Web Design)',
    description:
      'A modern web design project focusing on user-friendly interfaces and responsive layouts.',
    src: '/src/assets/images/easy-found.jpg', // Correct image path
    color: '#FF5733', // Orange color for Easy Found
    githubLink: 'https://github.com/your-repo/easy-found', // Replace with your GitHub repo link
    liveLink: 'https://example.com/easy-found', // Replace with the live project link
  },
  {
    title: 'JobSeek (Web Design)',
    description:
      'A web design project aimed at connecting job seekers with employers through a sleek and intuitive interface.',
    src: '/src/assets/images/jobseek.jpg', // Correct image path
    color: '#28A745', // Green color for JobSeek
    githubLink: 'https://github.com/your-repo/jobseek', // Replace with your GitHub repo link
    liveLink: 'https://example.com/jobseek', // Replace with the live project link
  },
  {
    title: 'Cartify (Java)',
    description:
      'A Java-based e-commerce platform for managing shopping carts and orders efficiently.',
    src: '/src/assets/images/istad-fundamental.jpg', // Correct image path
    color: '#F39C12', // Yellow color for Cartify
    githubLink: 'https://github.com/your-repo/cartify', // Replace with your GitHub repo link
    liveLink: 'https://example.com/cartify', // Replace with the live project link
  },
];

export default function Projects1() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <main className="bg-black">
      <section className="text-white w-full bg-slate-950" ref={containerRef}>
        {projects.map((project, i) => (
          <Card
            key={`p_${i}`}
            i={i}
            src={project.src}
            title={project.title}
            color={project.color}
            description={project.description}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </section>
    </main>
  );
}

function Card({ i, title, description, src, color, githubLink, liveLink }) {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 90%',
          end: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        className="relative h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image section */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={src}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Colored overlay */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: 'overlay' }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Content section */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Code
                  </span>
                </motion.a>

                {/* Live Link */}
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Live
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
