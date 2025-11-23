import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { getDatabase, ref, push } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAsCImY3OnpnPdvLX_BU_kVfVSTBkZPjY8",
  authDomain: "afnan-alam-web.firebaseapp.com",
  databaseURL: "https://afnan-alam-web-default-rtdb.firebaseio.com",
  projectId: "afnan-alam-web",
  storageBucket: "afnan-alam-web.firebasestorage.app",
  messagingSenderId: "346089184259",
  appId: "1:346089184259:web:02d291954d03a5f2db8236"
};

// Firebase initialize
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();
  }, []);

  const contact_info = [
    {
      logo: "mail",
      text: "afnanalamanan@gmail.com",
      link: "mailto:afnanalamanan@gmail.com",
    },
    {
      logo: "call-outline",
      call: "tel:+88001644612999",
      text: "+880 1644612999",
      link: "https://wa.me/8801644612999?text=Hi,%20AFNAN%20ALAM%20(ANAN)",
    },
    {
      logo: "location",
      text: "Pallabi, Dhaka, Bangladesh",
    },
  ];

  // handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      alert("Please fill up the Name field!");
      return;
    }
    if (!form.email.trim()) {
      alert("Please fill up the Email field!");
      return;
    }
    if (!form.message.trim()) {
      alert("Please fill up the Message field!");
      return;
    }

    // save to firebase
    push(ref(db, "contacts"), form)
      .then(() => {
        alert("Message Sent Successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        alert("Error: " + err.message);
      });
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="flex justify-center gap-6" data-aos="fade-down">
        {/* Desktop only animation */}
        <div className="hidden md:block w-[700px] h-[500px]">
          <DotLottieReact
            data-aos="fade-down"
            src="https://lottie.host/429eca35-0382-4da1-8be2-572b16b888c5/IbrtplNdCt.lottie"
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        {/* Mobile only animation */}
        <div className="block md:hidden w-[300px] h-[200px]">
          <DotLottieReact
            data-aos="fade-down"
            src="https://lottie.host/429eca35-0382-4da1-8be2-572b16b888c5/IbrtplNdCt.lottie"
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      <div
        className="text-center mt-8"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>
      </div>

      <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
        <form
          className="flex flex-col flex-1 gap-5"
          data-aos="fade-down"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={form.email}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={10}
            value={form.message}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 text-white"
          ></textarea>
          <button
            type="submit"
            className="btn-primary w-fit"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Send Message
          </button>
        </form>

        <div
          className="flex flex-col gap-7"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          {contact_info.map((contact, i) => (
            <div
              key={i}
              className="flex flex-row text-left gap-4 flex-wrap items-center"
              data-aos="fade-up"
              data-aos-delay={700 + i * 150}
            >
              <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                <ion-icon name={contact.logo}></ion-icon>
              </div>
              <a
                href={contact.link}
                className="md:text-base text-sm break-words"
              >
                {contact.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
