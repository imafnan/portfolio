import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Animation = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container mx-auto">
      <div
        className="flex justify-center items-center my-20"
        data-aos="fade-up"  
      >
        <DotLottieReact
          src="https://lottie.host/4bf86c31-df12-4f88-a8b0-23c6a4892f5d/7HzIVMnDN1.lottie"
          loop
          autoplay
          style={{ width: 300, height: 300 }}
        />
      </div>
    </div>
  );
};

export default Animation;
