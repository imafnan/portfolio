import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
    AOS.refresh();
  }, []);

const googleDriveFileId = "1KaELZqWvYR_4LomSMawP0VjTFwMBLs2O";

const navigateToResume = () => {
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;
  window.open(downloadUrl, "_blank");
};


  return (
    <section
      id="about"
      className="pb-10 text-white"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="flex items-center max-md:block container px-4">
        <div
          className="text-center mt-8 max-w-4xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3 className="text-4xl font-semibold">
            About <span className="text-cyan-600">Me</span>
          </h3>
          <p className="text-gray-400 my-3 text-lg">My introduction</p>
          <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-sm:px-2 max-md:px-3 lg:px-10 max-w-6xl mx-auto">
            <div className="p-2" data-aos="fade-up" data-aos-delay="400">
              <div className="text-gray-300 my-3">
                <p className="text-justify leading-7 w-11/12 mx-auto">
                  I am Afnaan Alam Anan, a passionate and dedicated student of Computer Engineering at Shyamoli Ideal
                  Polytechnic Institute. Alongside my academic journey, I have successfully completed the Front-End Web
                  Development course from Creative IT Institute. I have hands-on skills in HTML5, CSS3, JavaScript, React JS,
                  Redux, Tailwind CSS, Bootstrap, API integration, and Firebase.
                  <br/>
                  My goal is to become a skilled MERN Stack Developer and eventually pursue a career as a Machine Learning
                  Engineer. I am eager to contribute my knowledge and continue learning in the dynamic field of web and
                  software 
                </p>
                <br />
                <br />
                <button className="btn-primary" onClick={navigateToResume}>
                  Check Resume
                </button>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-delay="500" className="mx-auto">
          <DotLottieReact
            src="https://lottie.host/31b984a5-0e91-484d-a2fc-c3441f94b72c/Rvw2G7Zm8g.lottie"
            loop
            autoplay
            style={{ width: 350, height: 350, margin: "0 auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
