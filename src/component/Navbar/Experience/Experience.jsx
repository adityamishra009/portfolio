import React from "react";
import Companylogo from "../../../assets/Companylogo.jpeg"  

const Experience = () => {
  return (
    <section
      id="Experience"
      className="w-full bg-[#0f172a] text-white px-8 py-16 md:px-20"
    >
      <div className="max-w-5xl mx-auto">

        
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Experience
        </h2>

        
        <div className="group flex flex-col md:flex-row items-center gap-8 bg-[#171d32] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">

          
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={Companylogo}
              alt="company"
              className="w-92 md:w-700 rounded-xl shadow-lg 
                         group-hover:scale-115 
                         transition-transform duration-300"
            />
          </div>

        
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-semibold">
              Software Developer Intern
            </h3>

            <p className="text-blue-400 text-sm mt-1">
              Koncept Software Solutions  · Internship
            </p>

            <p className="text-gray-300 mt-4 text-sm md:text-base leading-relaxed">
              Worked on developing responsive web applications and REST APIs.
              Gained hands-on experience with frontend, backend, and database
              technologies while following clean coding practices.
            </p>

            
            <div className="mt-5 flex flex-wrap gap-3">
              {["HTML", "CSS", "Tailwind", "React", "Node.js", "MongoDB"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full 
                               bg-blue-500/10 text-blue-300
                               hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
