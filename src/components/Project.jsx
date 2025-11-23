import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CakeBakery from '../assets/images/CakeBakery.png'
import Finexo from '../assets/images/Finexo.png'
import ChatApp from '../assets/images/ChatApp.png'
import { Pagination, Autoplay } from "swiper";
import Todo from '../assets/images/Todo.png'
import quizapp from '../assets/images/QuApp.png'
import silicon1 from '../../src/assets/images/Slicon One.png'
import glitto from '../../src/assets/images/glitto.png'
import htmlcoffee from '../../src/assets/images/htmlcoffee.png'
import fullcoffee from '../../src/assets/images/fullcoffee.png'

import "swiper/css";
import "swiper/css/pagination";

const Project = () => {
  const projects = [
    {
      img:ChatApp,
      name: "Chat App",
      github_link: "https://github.com/imafnan/ChatApp",
      live_link: "https://chat-app-sandy-five.vercel.app/",
    },
    {
      img:Todo,
      name: "To-Do List ",
      github_link: "https://github.com/imafnan/Todo-App_Firebase-",
      live_link: "https://todo-app-firebase-eight.vercel.app/",
    },
    {
      img:quizapp,
      name: "Quiz-app",
      github_link: "https://github.com/imafnan/quiz-app",
      live_link: "https://eatery-9wyl.vercel.app/",
    },
    
    {
      img:htmlcoffee,
      name: "Coffee",
      github_link: "https://github.com/imafnan/Coffee",
      live_link: "https://coffee-chi-lime.vercel.app/",
    },
    {
      img:fullcoffee,
      name: "Coffee E-commerce Shop",
      github_link: "https://github.com/imafnan/E-commerce-Coffee",
      live_link: "https://e-commerce-coffee-shop-beta.vercel.app/",
    },
    {
      img:glitto,
      name: "Glitto",
      github_link: "https://github.com/imafnan/GLITTO",
      live_link: "https://glitto.vercel.app/",
    },
    {
      img:CakeBakery,
      name: "Cake Bakery",
      github_link: "https://github.com/imafnan/Cake-Bakery",
      live_link: "https://cake-bakery-ten.vercel.app/",
    },
    {
      img:Finexo,
      name: "Finexo",
      github_link: "https://github.com/imafnan/Finexo-Project",
      live_link: "https://finexo-project.vercel.app/",
    },
    
    {
      img:silicon1,
      name: "Silicon",
      github_link: "https://github.com/imafnan/Silicon-One",
      live_link: "https://silicon-one.vercel.app/",
    },


  ];
  return (
    <section id="projects" className="py-20 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-12/13 w-full h-full ">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }} 
            modules={[Pagination, Autoplay]} >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg h-[30vh] w-full max-sm:h-[20vh]" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank" className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">
                      Live
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
