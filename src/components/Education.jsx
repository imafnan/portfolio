import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 400, once: true });
    AOS.refresh();
  }, []);

  const educationDetails = [
    {
      degree: 'Diploma in Computer Science',
      institution: 'Shyamoli Ideal Polytechnic Institute, Mohammadpur, Dhaka, Bangladesh',
      year: ' [2024-2025-present]',
    },
    {
      degree: 'SSC',
      institution: 'Harpara High School , Raozan, Chittagong ,Bangladesh',
      year: ' [2022-2023]',
    },
  ];

  return (
    <div id="education" className="container mx-auto px-4 py-12">
      <h3
        className="text-4xl text-center font-semibold mb-1"
        data-aos="fade-up"
        data-aos-delay="100">
        My <span className="text-cyan-600">Education</span>
      </h3>
      <p
        className="text-lg text-center font-normal"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        My educational details are as follows.
      </p>
      <hr className="border-gray-300 w-full mb-8" data-aos="fade-up" data-aos-delay="300" />
      <div>
        {educationDetails.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg shadow-md p-6 flex flex-col items-start mb-4"
            data-aos="fade-up"
            data-aos-delay={400 + index * 200}
          >
            <div className="text-lg font-medium mb-2 text-gray-700">{edu.degree}</div>
            <div className="flex-1">
              <div className="text-base text-gray-500">{edu.institution}</div>
              <div className="text-base text-gray-500">{edu.year}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
