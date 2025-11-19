import { CheckCircle } from "lucide-react";

const skills = [
  {
    title: "Programming Languages",
    items: "JavaScript, TypeScript, Python",
  },
  {
    title: "Front-End Technologies",
    items: "React.js, Next.js, Angular, HTML, CSS, Tailwind, Bootstrap",
  },
  {
    title: "Back-End Technologies",
    items: "NodeJS, Express.js, Socket.io, JWT, OAuth",
  },
  {
    title: "Databases",
    items: "MongoDB, MySQL, PostgreSQL",
  },
];

export default function Timeline() {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-10">
      <h2 className="text-3xl  text-center mb-12 text-gray-900">
        Skills & Technologies
      </h2>

      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-5 bg-white border border-green-500 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start space-x-3">
              <CheckCircle className="text-green-600 mt-1 w-5 h-5 flex-shrink-0" />
              <p className="text-gray-900 text-base">
                <strong>{skill.title}:</strong> {skill.items}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
