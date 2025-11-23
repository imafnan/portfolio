import React from "react";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white container">

        {/*........... Title.......... */}
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My work <span className="text-cyan-600">experince</span>
        </h3>
      </div>
     

        <div className= "flex gap-6 lg:flex-row flex-col-reverse flex-wrap items-center mt-24 ">

            <div className="bg-gray-700 relative px-8 rounded-2xl py-5 max-md:py-2  mx-auto">
                <h2 className="text-2xl max-md:text-[18px] font-semibold">
                    Frontend Engineer
                </h2>
                <p className="lg:text-left text-justify max-w-lg text-sm mt-4 max-md:mt-[5px] text-gray-200 leading-6">
                    Specialized in building interactive and scalable front-end applications with HTML,React JS etc.
                </p>
            </div>

            <div className="bg-gray-700 relative px-8 rounded-2xl py-5 max-md:py-2  mx-auto">
                <h2 className="text-2xl max-md:text-[18px] font-semibold">
                    Web Design & Responsive
                </h2>
                <p className="lg:text-left text-justify max-w-lg text-sm mt-4 max-md:mt-[5px] text-gray-200 leading-6">
                   Transforming Figma designs into responsive, pixel-perfect websites using Tailwind CSS for sleek and efficient UI development.
                </p>
            </div>

            <div className="bg-gray-700 relative px-8 rounded-2xl py-5 max-md:py-2  mx-auto">
                <h2 className="text-2xl max-md:text-[18px] font-semibold">
                    Web Development - React JS
                </h2>
                <p className="lg:text-left text-justify max-w-lg text-sm mt-4 max-md:mt-[5px] text-gray-200 leading-6">
                    Developing dynamic, component-based web apps using React.js and modern front-end tools.
                </p>
            </div>

            <div className="bg-gray-700 relative px-8 rounded-2xl py-5 max-md:py-2  mx-auto">
                <h2 className="text-2xl max-md:text-[18px] font-semibold">
                    Backend with Firebase
                </h2>
                <p className="lg:text-left text-justify max-w-lg text-sm mt-4 max-md:mt-[5px] text-gray-200 leading-6">
                   Built interactive web apps using Firebase, utilizing its real-time database and auth system to backend performance
                </p>
            </div>


        </div>
     
      
    </section>
  );
};

export default Hireme;
