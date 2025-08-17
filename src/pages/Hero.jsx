import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";



const Hero = () => {
  return (
   <>
        <section
          id="home"
          className="min-h-screen bg-[#0f172a] text-white md:grid grid-cols-2 items-center justify-center pt-30 md:pt-0 px-5 md:px-35 w-full"
        >
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className=" text-center md:text-left space-y-5 w-full"
          >
            <p className="text-sm text-gray-400">Hi, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold text-[#06B6D4]">
               POOJA K
            </h1>
            <h2 className="text-2xl font-semibold">MERN STACK DEVELOPER</h2>
            <p className="text-gray-400 max-w-md">
              Crafting modern, responsive full-stack web applications with MongoDB, Express.js, React.js, and Node.js. Passionate about creating clean, efficient, and user-focused solutions.
            </p>
           
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 text-2xl pt-2">
              <a href="https://www.linkedin.com/in/poojakrishnan22" target="_blank" rel="noreferrer">
                <FaLinkedin className="hover:text-cyan-400" />
              </a>
              <a href="https://github.com/Pooja-k22" target="_blank" rel="noreferrer">
                <FaGithub className="hover:text-cyan-400" />
              </a>
             
            </div>
          </motion.div>
    
          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className=" flex justify-center mt-10 md:mt-0 w-full"
          >
            <img
            src={'/pooja.jpg'}
              alt="pooja"
              className=" w-60 h-60 md:w-80 md:h-80 object-cover rounded-full border-2 mb-15 md:mb-0 border-cyan-400 shadow-lg"
            />
          </motion.div>
    
        
        </section>
          
   </>
  );
};

export default Hero;
