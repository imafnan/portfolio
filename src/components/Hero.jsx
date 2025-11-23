import React, { useRef, useEffect } from "react";
import my2 from "../assets/images/Heroimg.png";
import Type from "./Type";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Myim from '../assets/images/Myimage.png'

const socialMediaLinks = [
  "https://www.instagram.com/itsanan.0/profilecard/?igsh=MW5nYWtzd2VuZ3o5NA==",
  "https://github.com/imafnan",
  "https://www.linkedin.com/in/afnan-alam-anan-608552339/",
  "https://www.linkedin.com/in/afnan-alam-anan-608552339/",
];

const Hero = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const social_media = [
    "logo-instagram",
    "logo-github",
    "logo-linkedin",
    "logo-twitter",
  ];

  return (
    <section id="home" className="min-h-screen flex pt-10 md:flex-row  flex-col items-center">
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={Myim} alt="Hero Image" className="rounded-[50px] w-[350px] max-md:px-3 max-md:mt-[20px]  " />
      </div>
      <div className="flex-1" >
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold" data-aos="fade-down" data-aos-delay="200" >
            <span className="text-cyan-600 md:text-6xl text-5xl" data-aos="fade-down" data-aos-delay="300" >
              Hello!
              <br />
            </span>
             My Name is <span data-aos="fade-down" data-aos-delay="400">Afnan Alam. (Anan)
             </span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600" data-aos="fade-down" data-aos-delay="500" >
            <Type />
          </h4>
          <button
            className="btn-primary mt-8"
            onClick={scrollToContact}
            data-aos="fade-down"
            data-aos-delay="600" >
            Connect with Me
          </button>
          <div
            className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5"
            data-aos="fade-down"
            data-aos-delay="700"
          >
            {social_media?.map((icon, index) => (
              <a
                key={icon}
                href={socialMediaLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer"
                data-aos="fade-down"
                data-aos-delay={800 + index * 100}
              >
                <ion-icon name={icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div ref={contactRef}></div>
    </section>
  );
};

export default Hero;
