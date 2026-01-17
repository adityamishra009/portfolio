import React from "react"
import My_image from "../../../../src/assets/My_image.jpeg";



const Home = () => {

const handleContactClick = () => {
  window.open("mailto:adityamishra0905@gmail.com", "_self")
};

const handleResumeClick = () => {
  window.open("aditya_resume.pdf", "_blank");
};



  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          
        </h1>

      <p className="text-sm md:text-2xl tracking-tight text-gray-300">
  Hi, I am{" "}
  <span
    className="
      inline-block font-semibold text-white
      animate-pulse
    "
  >
  Aditya Mishra
  </span>
      , a passionate software developer learning and building web applications.

      I focus on writing clean, maintainable code and
building projects that solve real problems
</p>


        <div className="flex flex-col gap-2 mt-3">
        
        <button onClick={handleContactClick} className="mt-2 md:mt-5 text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] w-fit"
>
           Contact
        </button>

        <button
  onClick={handleResumeClick}
  className="mt-2 ml-2 text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 transition duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] w-fit self-start"

>
   Resume
</button>
</div>

        
      </div>
      <div>
<img
  src={My_image}
  alt="profile"
  className="w-40 md:w-72 rounded-2xl shadow-xl object-cover hover:scale-105 transition-transform duration-300
"
/>

      </div>
    </div>
  );
};

export default Home;