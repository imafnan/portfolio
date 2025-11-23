import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const googleDriveFileId = "1KaELZqWvYR_4LomSMawP0VjTFwMBLs2O";

  const resumeDownloadLink = `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;

  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "EDUCATION", link: "#education" },
    { name: "CONTACT", link: "#contact" },
    { name: "RESUME", link: resumeDownloadLink, isDownload: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white/90 text-gray-900" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between container">
        {/* ===== Logo ===== */}
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold">
            A<span className="text-cyan-600">FN</span>A
            <span className="text-cyan-600">N</span>
          </h4>
        </div>

        {/* ===== Desktop Menu ===== */}
        <div
          className={`${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                {menu.isDownload ? (
                  <a
                    href={menu.link}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {menu.name}
                  </a>
                ) : (
                  <a href={menu.link}>{menu.name}</a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* ===== Mobile Menu Icon ===== */}
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] ${
            open ? "text-gray-900" : "text-gray-100"
          } text-3xl md:hidden m-5 cursor-pointer`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>

        {/* ===== Mobile Menu ===== */}
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${
            open ? "right-0" : "right-[-100%]"
          }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks.map((menu, i) => (
              <li
                key={i}
                onClick={() => setOpen(false)}
                className="px-6 hover:text-cyan-600"
              >
                {menu.isDownload ? (
                  <a
                    href={menu.link}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {menu.name}
                  </a>
                ) : (
                  <a href={menu.link}>{menu.name}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
