import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="w-full bg-[#465697] text-white px-8 py-12 md:px-20 flex flex-col md:flex-row justify-between items-center gap-8"
    >
      {/* Left */}
      <div>
        <h1 className="text-3xl md:text-5xl font-bold">
          Contact
        </h1>
        <p className="mt-2 text-sm md:text-xl text-gray-200">
          Feel free to reach out!
        </p>
      </div>

      {/* Right Icons */}
      <div className="flex gap-7 text-4xl">
        {/* Email */}
        <a
          href="adityamishra0905@gmail.com"
          className="hover:scale-120 transition-transform"
        >
          <MdOutlineEmail />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/aditya-mishra-88029b24a/"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-120 transition-transform"
        >
          <CiLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/adityamishra009?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
