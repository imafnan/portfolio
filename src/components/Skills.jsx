import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 200, once: true });
    AOS.refresh();
  }, []);

  const skills = [
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      count: 70,
    },
    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      count: 70,
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      count: 70,
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      count: 60,
    },
    {
      name: "React Redux",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      count: 55,
    },
    {
      name: "Tailwind CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      count: 50,
    },
    {
      name: "Bootstrap",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      count: 50,
    },
    {
      name: "Firebase",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      count: 50,
    },
  ];

  const learning = [
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    count: 15,
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    count: 25,
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    count: 30,
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    count: 5,
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    count: 5,
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    count: 5,
  },
  {
    name: "Postman",
    logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    count: 4,
  },
  {
    name: "Astro",
    logo: "https://astro.build/assets/press/astro-icon-light-gradient.svg",
    count: 3,
  },
  {
    name: "Redis",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    count: 3,
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    count: 3,
  },
];


  return (
    <section id="skills" className="py-10  relative">
      <div className="mt-8 text-gray-100 text-center container">
        {/* ==== My Skills ==== */}
        <h3 data-aos="fade-down" data-aos-delay="100" className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p data-aos="fade-down" data-aos-delay="200" className="text-gray-400 mt-3 text-lg">
          My knowledge
        </p>
        <div className="flex items-center justify-center mt-12 gap-4 flex-wrap">
          {skills.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-down"
              data-aos-delay={300 + i * 150}
              className=" group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-800 p-4 rounded-xl hover:bg-[#90c3f107] nav
              "
            >
              <p className="text-xl mb-2">{skill.name}</p>
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <img src={skill.logo} alt={skill.name} className="w-16 h-16" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ==== Currently Learning ==== */}
        <h3 data-aos="fade-down" data-aos-delay="100" className="text-4xl font-semibold mt-16">
          Currently <span className="text-cyan-600">Learning</span>
        </h3>
        <div className="flex items-center justify-center mt-12 gap-4 flex-wrap">
          {learning.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={300 + i * 150}
              className=" group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-800 p-4 rounded-xl hover:bg-[#90c3f107]  "
            >
              <p className="text-xl mb-2">{skill.name}</p>
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center ">
                  <img src={skill.logo} alt={skill.name} className="w-16 h-16" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
