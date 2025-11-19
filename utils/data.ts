export const data = [
  {
    field: "Profile",
    name: "Salah Haddani",
    text: "Salah Haddani Software Engineer Experienced software engineer skilled in full-stack development with Java, React.js, Next.js, and Node.js",
  },
  {
    field: "Education",
    name: "Engineer Degree (Master Level) — Software Engineering",
    text: "Engineer Degree (Master Level) — Software Engineering INPT Morocco",
  },
  {
    field: "Education",
    name: "Preparatory Classes for Engineering Schools",
    text: "Preparatory Classes for Engineering Schools CPGE Morocco",
  },
  {
    field: "Experience",
    name: "Software Engineer Internship at Siemens Morocco",
    text: "Software Engineer Internship",
  },
  {
    field: "Experience",
    name: "Software Engineer Internship at Kasineuf",
    text: "Software Engineer Internship",
  },
  {
    field: "Experience",
    name: "Software Engineer Internship at Orange Morocco",
    text: "Software Engineer Internship",
  },
  {
    field: "Project",
    name: "Web App",
    text: "",
  },
  {
    field: "Project",
    name: "Web App",
    text: "",
  },
  {
    field: "Project",
    name: "chat Application",
    text: "",
  },
  {
    field: "Skills",
    name: "Programming Languages",
    text: "Programming Languages: Java, Python, JavaScript, Go",
  },
  {
    field: "Skills",
    name: "Frameworks & Libraries",
    text: "Frameworks & Libraries: React.js, Next.js, Node.js, FastAPI, Django",
  },
  {
    field: "Skills",
    name: "Tools & Technologies",
    text: "Tools & Technologies: Git, Docker, Kubernetes, AWS, CI/CD pipelines",
  },
  {
    field: "Skills",
    name: "Software Development",
    text: "Software Development: Full-Stack Development, System Design, Infrastructure as Code",
  },
  {
    field: "Languages",
    name: "Arabic",
    text: "Languages: Arabic [Native]",
  },
  {
    field: "Languages",
    name: "French",
    text: "Languages: French [Fluent]",
  },
  {
    field: "Languages",
    name: "English",
    text: "Languages: English [Proficient]",
  },
];

export const search = (query: any) => {
  const results = data.filter((item) =>
    item.text.toLowerCase().includes(query.toLowerCase())
  );
  return results.map((item) => ({
    ...item,
    highlightedText: highlightText(item.text, query),
  }));
};

const highlightText = (text: any, query: any) => {
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, '<span class="highlight ">$1</span>');
};
