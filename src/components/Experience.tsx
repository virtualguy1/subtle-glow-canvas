import React, { useEffect, useRef } from "react";
import { Briefcase } from "lucide-react";
const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description:
      "Lead development for client-facing web applications. Improved application performance by 35% through code optimization and implementing modern frontend practices.",
  },
  {
    title: "Frontend Developer",
    company: "Creative Solutions",
    period: "2018 - 2021",
    description:
      "Developed responsive web applications using React and Redux. Collaborated with design team to implement pixel-perfect UI components.",
  },
  {
    title: "UI/UX Designer",
    company: "DesignHub",
    period: "2016 - 2018",
    description:
      "Created wireframes and prototypes for mobile and web applications. Conducted user research and usability testing to improve product interfaces.",
  },
];
const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <section
      id="experience"
      className="section bg-secondary/30"
      ref={sectionRef}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="section-heading">Professional Experience</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="reveal relative pl-6 border-l-2 border-border"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent rounded-full"></div>
              <div className="mb-1">
                <span className="text-sm font-medium text-muted-foreground">
                  {exp.period}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
              <h4 className="text-lg text-accent mb-2">{exp.company}</h4>
              <p className="text-base text-muted-foreground">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;
