import React from "react";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <section
      id="Projects"
      className="w-full bg-[#0f172a] text-white px-8 py-16 md:px-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Projects
        </h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Project 1 */}
          <div className="group bg-[#171d32] p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition">
              Real Time Collaborative Code Editor 
            </h3>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
              Designed and developed a real time collaborative code editor 
              using react and node supporting multiple users per session 
              implemented Socket.io based web socket communication to acheive Synchronization built restful Api using express js 
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {["React", "Node.js", "Expressjs","Socket.io"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="https://github.com/adityamishra009/codeeditor"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition text-sm font-semibold"
            >
              <FiGithub />
              Source Code
            </a>
          </div>

          {/* Project 2 */}
          <div className="group bg-[#171d32] p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition">
              Ai Blog Generator
            </h3>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
              Developed a Responsive Application to generate blog 
              Implemented async await to handle api responses 
              utilized react hook for state management and optimized component rendering
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {["React", "Tailwind css", "Gemini Api"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="https://github.com/adityamishra009/ai-powerd-blog-generator"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition text-sm font-semibold"
            >
              <FiGithub />
              Source Code
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
