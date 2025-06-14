import React, { useState } from 'react';
import { Calendar, BookOpen, X } from 'lucide-react';
import { motion } from 'framer-motion';

// Import images
import setcImage from '@/assets/images/istad-fundamental.jpg';
import cppImage from '@/assets/images/cpp-project.jpg';
import istadPreUniversityImage from '@/assets/images/istad-fundamental.jpg';
import istadFundamentalImage from '@/assets/images/istad-fundamental.jpg';
import pucEnglishImage from '@/assets/images/istad-fundamental.jpg';
import ckccKoreanImage from '@/assets/images/istad-fundamental.jpg';

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const educationData = [
    {
      degree: 'First Year - SETC University',
      school: 'SETC University',
      mascot: '📘',
      year: '2023-2024',
      description: 'Studying core computer science and management principles.',
      image: setcImage,
      semesters: [
        {
          semester: 'Semester 1',
          courses: [
            'A+ (COMPUTER MAINTENANCE & REPAIR) I',
            'C++ PROGRAMMING',
            'OFFICE APPLICATIONS',
            'DATA STRUCTURE I',
            'HISTORY',
            'PRINCIPLES OF MANAGEMENT',
            'COMPUTER MATHEMATICS',
            'GRAPHIC DESIGN I',
            'ENGLISH 1',
          ],
        },
        {
          semester: 'Semester 2',
          courses: [
            'A+ (COMPUTER MAINTENANCE & REPAIR) II',
            'C PROGRAMMING I',
            'WEB DEVELOPMENT I',
            'DATA STRUCTURE II',
            'CULTURE & CIVILISATION',
            'PUBLIC RELATIONS',
            'ACCOUNTING',
            'GRAPHIC DESIGN II',
            'ENGLISH 2',
          ],
        },
      ],
    },
    {
      degree: 'C/C++',
      school: 'Ant Training Technology',
      mascot: '📗',
      year: '2024',
      description:
        'Studied C/C++ programming to enhance problem-solving skills.',
      image: cppImage,
    },
    {
      degree: 'Pre-University Scholarship',
      school:
        'Institute of Science and Technology Advanced Development - ISTAD',
      mascot: '📗',
      year: '2024',
      description: 'Studied Web Design (HTML, CSS, JavaScript, UX/UI, Deploy).',
      image: istadPreUniversityImage,
    },
    {
      degree: 'Fundamental Scholarship',
      school:
        'Institute of Science and Technology Advanced Development - ISTAD',
      mascot: '📗',
      year: '2024',
      description:
        'Studied Web Design (HTML, CSS, JavaScript, UX/UI, Deploy), Database, and Java.',
      image: istadFundamentalImage,
    },
    {
      degree: 'English Program',
      school: 'PUC: Paññāsāstra University of Cambodia',
      mascot: '📘',
      year: '2024',
      description: 'Completed English studies to enhance communication skills.',
      image: pucEnglishImage,
    },
    {
      degree: 'Korean Program',
      school: 'CKCC: Cambodia-Korea Cooperation Center',
      mascot: '📘',
      year: '2024',
      description: 'Completed Korean studies to improve language proficiency.',
      image: ckccKoreanImage,
    },
  ];

  const openModal = (education) => {
    setSelectedEducation(education);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEducation(null);
    setIsModalOpen(false);
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Educational Journey
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover how academic excellence shapes innovative thinking and
            professional growth.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative border rounded-xl p-8 bg-gray-900/50 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              onClick={() => openModal(edu)}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{edu.mascot}</span>
                  <h3 className="text-2xl font-bold text-white">
                    {edu.degree}
                  </h3>
                </div>
                <p className="text-lg text-gray-300 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-teal-500" />
                  {edu.school}
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {edu.year}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedEducation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="bg-gray-800 text-white rounded-lg p-6 w-[80%] max-w-none relative"
            style={{ maxHeight: '90vh', overflowY: 'auto' }}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={closeModal}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={selectedEducation.image}
                alt={`${selectedEducation.degree} Certificate`}
                className="w-full md:w-1/2 h-auto rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4">
                  {selectedEducation.degree}
                </h3>
                <p className="text-gray-300 mb-4">
                  {selectedEducation.description}
                </p>
                {selectedEducation.semesters && (
                  <div className="space-y-4">
                    {selectedEducation.semesters.map((semester, index) => (
                      <div key={index}>
                        <h4 className="text-lg font-semibold text-teal-400">
                          {semester.semester}
                        </h4>
                        <ul className="list-disc pl-6 text-gray-300">
                          {semester.courses.map((course, courseIndex) => (
                            <li key={courseIndex}>{course}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EducationSection;
