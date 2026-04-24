import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiFirebase,
  SiRedux,
  SiFlutter,
  SiKotlin,
  SiSwift,
} from "react-icons/si";

const row1 = [
  { name: "React", icon: <FaReact className="text-sky-500" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
];

const row2 = [
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-orange-400" /> },
  { name: "Flutter", icon: <SiFlutter className="text-sky-400" /> },
  { name: "Kotlin", icon: <SiKotlin className="text-violet-500" /> },
  { name: "Swift", icon: <SiSwift className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-black" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
];

const TechCard = ({ item }) => (
  <div className="min-w-45 bg-white rounded-xl shadow-sm px-6 py-5 flex items-center gap-3 hover:shadow-md transition-all duration-300">
    <div className="text-4xl">{item.icon}</div>
    <p className="font-semibold text-gray-700 whitespace-nowrap">{item.name}</p>
  </div>
);

const OurTechStack = () => {
  return (
    <section className="section-padding overflow-hidden">
      <div className="section-container">
        {/* Row 1 Left */}
        <div className="mb-6 overflow-hidden">
          <div className="tech-stack-marquee mb-4 flex gap-5">
            {[...row1, ...row1].map((item, index) => (
              <TechCard key={index} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2 Right */}
        <div className="overflow-hidden">
          <div className="tech-stack-marquee-reverse mb-4 flex gap-5">
            {[...row2, ...row2].map((item, index) => (
              <TechCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTechStack;
