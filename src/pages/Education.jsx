
import { GraduationCap, Briefcase, MapPin, Calendar, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// Timeline item type
const items = [
  {
    type: "education",
    title: "B.Tech in Electrical & Electronics Engineering",
    org: "NSS College of Engineering, Palakkad",
    location: "Palakkad, Kerala",
    period: "2018 – 2022",
    bullets: [
      "Strong foundation in problem‑solving and analytical skills.",
      "Participated in technical workshops and projects.",
     
    ],
  },
  {
    type: "training",
    title: "Full‑time Intern – MERN Stack Developer (Onsite)",
    org: "Luminar Technolab",
    location: "Kochi, Kerala",
    period: "Dec 2024 – Present",
    bullets: [
"Practical exposure in building MERN stack applications (MongoDB, Express.js, React.js, Node.js).",
  "Designed and developed dynamic web apps with RESTful APIs and database integration.",
  "Implemented secure login systems with JWT tokens and password hashing.",
  "Handled global state efficiently using Redux and React Context.",
  "Crafted mobile-friendly, modern UIs with Tailwind CSS, Bootstrap, and reusable React components.",
  "Worked on individual and group projects, following clean architecture and version control best practices with Git.",
  "Delivered end-to-end full-stack projects including routing, service layers, and role-based features."    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-14 bg-[#0f172a] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 md:px-6 mt-10 md:mt-15">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-10"
        >
          Education 
        </motion.h2>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-5 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gray-300 via-gray-200 to-transparent" />

          <ul className="space-y-6">
            {items.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="relative pl-12"
              >
                {/* Dot */}
                <span
                  className={`absolute left-4 md:left-5 top-4 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full ring-4 ring-white shadow ${
                    item.type === "education" ? "bg-indigo-500" : "bg-emerald-500"
                  }`}
                />

                {/* Card */}
                <div className="bg-[#1e293b] rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5 md:p-6">
                  <div className="flex flex-wrap items-start gap-3 md:gap-4">
                    <div className="shrink-0 rounded-xl p-2 md:p-2.5 bg-[#9ed4fd]">
                      {item.type === "education" ? (
                        <GraduationCap className="h-6 w-6" />
                      ) : (
                        <Briefcase className="h-6 w-6" />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg md:text-xl text-white font-semibold leading-snug">
                        {item.title}
                      </h3>
                      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-300">
                        <span className="inline-flex items-center gap-1"><ChevronRight className="h-4 w-4" />{item.org}</span>
                        <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" />{item.location}</span>
                        <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" />{item.period}</span>
                      </div>

                      <ul className="mt-3 md:mt-4 list-disc pl-5 space-y-1.5 text-gray-300">
                        {item.bullets.map((b, i) => (
                          <li key={i} className="leading-relaxed">{b}</li>
                        ))}
                      </ul>

                      {/* Chips */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.type === "education" ? (
                          ["B.Tech", "EEE", "Foundations", "Projects"].map((tag) => (
                            <span key={tag} className="px-2.5 py-1 rounded-full text-xs bg-[#f1deff] text-indigo-700 border border-indigo-700">
                              {tag}
                            </span>
                          ))
                        ) : (
                          [
                            "MongoDB",
                            "Express",
                            "React",
                            "Node",
                            "JavaScript",
                            "Rest APIS",
                            "JWT",
        
                            "Redux",
                            "Tailwind",
                            "Bootstrap",
                            "MVC",
                            "Git",
                            "Angular",
                          ].map((tag) => (
                            <span key={tag} className="px-2.5 py-1 rounded-full text-xs bg-emerald-50 text-emerald-700 border border-emerald-100">
                              {tag}
                            </span>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
