import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiFigma,
  
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React JS", icon: <SiReact className="text-cyan-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Express JS", icon: <SiExpress className="text-gray-300" /> },
  { name: "Node JS", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "Git", icon: <SiGit className="text-red-500" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  
];

const About = () => {
  return (
    <section
      id="about"
      className=" bg-[#1e293b] text-gray-300 px-6 md:px-20 py-10 min-h-screen"
    >
      <div className="flex flex-col justify-center items-center mt-15 md:mt-30">
        {/* Header */}
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl font-bold mb-4 text-white ">About Me</h2>
         
        </div>

        {/* About Grid */}
        <div className="w-full grid md:grid-cols-2  md:p-5">
          {/*  Description */}
          <div className="md:p-5 ">
            <h3 className="text-xl font-semibold text-center md:text-left text-white mb-9">
              Get to know me!
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed text-justify">
              Hi, I'm Pooja K — a MERN Stack developer passionate about creating
              clean, responsive, and user-friendly web applications. With a
              background in Electrical and Electronics Engineering, my interest
              in technology led me to pursue full-stack development with the
              MERN stack.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed text-justify">
              To enhance my skills, I completed a MERN stack internship at
              Luminar Technolab, where I gained hands-on experience. I’m always
              excited to learn new technologies and work on practical projects.
            </p>

           
          </div>

          {/*  Skills */}
          <div className="md:p-5  md:ml-9">
            <h3 className="text-xl font-semibold text-white text-center md:text-left mb-9">My Skills</h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-gray-900 p-3 rounded shadow-md hover:bg-cyan-500 hover:text-white transition"
                >
                  <div className="text-2xl">{skill.icon}</div>
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
