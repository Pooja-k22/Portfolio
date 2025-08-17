import { motion } from "framer-motion";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "CampFind",
    description:
      "CampFind is a full-stack camping spot booking platform where users can explore, wishlist, review, and book camping destinations with real-time availability checks. It includes user authentication, an interactive blog section, and secure Stripe payment integration. Users can also host their own spots, while an admin dashboard ensures quality control through listing approvals.",
    liveLink: "https://campfind-frontend.vercel.app/",
    githubLink: "https://github.com/Pooja-k22/campfind-frontend.git",
    image: "/campfind.png",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "Tailwind CSS",
      "Framer motion",
      "JWT",
      "Multer",
      "Context API",
      "Axios",
    ],
  },
  {
    name: "CareerNest",
    description:
      "Designed and implemented a simplified job portal system enabling employers to post jobs and job seekers to search and apply. Focused on clean, maintainable code, secure and scalable APIs, role-based access control (Admin, Employer, Job Seeker), and a user-friendly interface.",
    liveLink: "https://job-portal-frontend-eight-theta.vercel.app/",
    githubLink: "https://github.com/Pooja-k22/job-portal-frontend.git",
    image: "/career.png",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",

      "Tailwind CSS",

      "JWT",
      "Multer",
      "Context API",
      "Axios",
    ],
  },
  {
    name: "Bookstore",
    description:
      "A full-stack web application where users can upload and sell their second-hand books, browse and purchase books from others,and manage their listings. The platform includes an admin role for approving book listings to ensure quality and payment processing via Stripe for smooth transactions. Additionally, the admin can post career vacancies that users can view and apply for, creating a combined marketplace for books and job opportunities.",
    liveLink: "https://bookstore-frontend-drab.vercel.app/",
    githubLink: "https://github.com/Pooja-k22/bookstore-frontend.git",
    image: "/bookstore.png",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "Tailwind CSS",
      "JWT",
      "Multer",
      "Context API",
      "Axios",
    ],
  },
  {
    name: "BookVerse",
    description:
      "Developed Book Review Board platform where users can sign up, log in, add books, and write reviews. The system features secure authentication with JWT, protected routes, and smooth CRUD operations for books and reviews. The frontend delivers a responsive and user-friendly experience, while the backend ensures scalability and security with RESTful APIs and database integration.",
    liveLink: "https://frontend-book-review-board.vercel.app/",
    githubLink: "https://github.com/Pooja-k22/frontend-book-review-board.git",
    image: "bookReview.png",
    techStack: [
      "React",
      "Bootstrap",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Context API",
      "Axios",
    ],
  },
  {
    name: "Uber Clone",
    description:
      "A responsive frontend clone of the Uber website designed using modern web technologies to replicate the look and feel of Uber's landing page and core user interface. This project showcases clean UI design, responsive layout, and interactive features resembling a real-world ride-booking platform.",
    liveLink: "https://uberclone-3iuj.vercel.app/",
    githubLink: "https://github.com/Pooja-k22/uberclone.git",
    image: "uber.png",
    techStack: ["React", "Bootstrap"],
  },

  {
    name: "Netflix Clone ",
    description: "Netflix Landing Page Clone",
    liveLink: "https://pooja-nfxtask1-827.netlify.app/",
    githubLink: "https://github.com/Pooja-k22",
    image: "netflix.png",
    techStack: ["Html", "Css","Bootstrap"],
  },
  {
    name: "woodland",
    description: "Furniture website Ui design",
    liveLink: "https://jolly-torte-793a50.netlify.app/",
    githubLink: "https://github.com/Pooja-k22/furniture-site.git",
    image: "furniture.png",
    techStack: ["Html", "Css","Bootstrap"],
  },
  {
    name: "Food order site ",
    description:
      "Food order Ui design.",
    liveLink: "https://foodorder-site-pooja.netlify.app/",
    githubLink: "https://github.com/Pooja-k22/food-order-site.git",
    image: "food.png",
    techStack: ["Html", "Css"],
  },
  {
    name: "Shopping website ",
    description: "Shopping website Ui design.",
    liveLink: "https://shoppingsite-pooja.netlify.app/",
    githubLink: "https://github.com/Pooja-k22/shopping-site.git",
    image: "shopping.png",
    techStack: ["Html","Tailwind"],
  },
  {
    name: "Mintie Craft",
    description: "craft website Ui design.",
    liveLink: "https://craft-selling-site-pooja.netlify.app/",
    githubLink: "https://github.com/Pooja-k22/craft-selling-site.git",
    image: "craft.png",
    techStack: ["Html", "Css"],
  },
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className="bg-[#1e293b] py-10">
      <div className="p-5 md:mx-40 mt-10">
        <h2 className="text-3xl font-bold text-white text-center mb-9 md:mb-15">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-[#0f172a] rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
             
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
                 onClick={() => setSelectedProject(project)}
              />
              <div className="p-5">
                <h3 className="text-2xl text-white font-semibold">
                  {project.name}
                </h3>
                <p className="text-gray-100 mt-2">
                  {project.description.slice(0, 100)}...
                </p>

                <div className="flex flex-wrap gap-2 mb-3 mt-4">
                  {project?.techStack?.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-700 text-white px-2 py-2 rounded-xl"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                 <div className="mt-4 flex gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-1 bg-cyan-500 text-white rounded hover:bg-cyan-600"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-1 border border-cyan-500 text-cyan-500 rounded hover:bg-cyan-500 hover:text-white"
              >
                GitHub
              </a>
            </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0  bg-[#00000085] flex items-center justify-center z-50">
          <div className="bg-gray-800 text-white rounded-lg max-w-2xl h-auto w-full p-6 relative">
            <button
              className="absolute top-1 right-6 text-gray-300 text-xl hover:text-black"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="w-full h-70 object-cover rounded mb-4 mt-3"
            />
            <div className="flex flex-wrap gap-2 mb-3">
              {selectedProject?.techStack?.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-700 text-violet-500 px-2 py-1 rounded-xl"
                >
                  {tech}
                </span>
              ))}
            </div>
            <h2 className="text-2xl font-bold mb-4">{selectedProject.name}</h2>
            <p className=" md:text-lg text-gray-400">
              {selectedProject.description}
            </p>

            <div className="mt-4 flex gap-4">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-1 bg-cyan-500 text-white rounded hover:bg-cyan-600"
              >
                Live Demo
              </a>
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-1 border border-cyan-500 text-cyan-500 rounded hover:bg-cyan-500 hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
