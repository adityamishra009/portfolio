
import React from "react";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <section
      id="About"
      className="w-full bg-[#0f172a] text-white px-8 py-16 md:px-20"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          About Me
        </h2>

       
        <p className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-3xl">
          I am a BTech Computer Science student from AKTU with a strong interest
          in full-stack web development. I enjoy building clean, responsive, and
          scalable applications while continuously improving my technical skills.
        </p>

       
        <p className="mt-4 text-blue-400 text-sm md:text-base font-medium">
          Focused on writing clean code and building real-world projects.
        </p>

        
        <div className="mt-10 grid md:grid-cols-2 gap-6">

          <div className="flex gap-3">
            <IoArrowForward className="text-blue-400 mt-1" size={20} />
            <p className="text-gray-300">
              <span className="font-semibold text-white">Frontend:</span>{" "}
              HTML, CSS, Tailwind CSS, React
            </p>
          </div>

          <div className="flex gap-3">
            <IoArrowForward className="text-blue-400 mt-1" size={20} />
            <p className="text-gray-300">
              <span className="font-semibold text-white">Backend:</span>{" "}
              Node.js, Express.js
            </p>
          </div>

          <div className="flex gap-3">
            <IoArrowForward className="text-blue-400 mt-1" size={20} />
            <p className="text-gray-300">
              <span className="font-semibold text-white">Database:</span>{" "}
              MongoDB, SQL
            </p>
          </div>

          <div className="flex gap-3">
            <IoArrowForward className="text-blue-400 mt-1" size={20} />
            <p className="text-gray-300">
              Hands-on experience through academic and personal projects.
            </p>
          </div>

        </div>

       
        <div className="mt-10 text-gray-400 text-sm">
          Excited to learn, grow, and contribute as a
          software developer.
        </div>

      </div>
    </section>
  );
};

export default About;
