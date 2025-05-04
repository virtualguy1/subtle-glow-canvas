
import React, { useEffect } from 'react';
import { Code } from 'lucide-react';

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "HTML/CSS", level: 95 },
  { name: "UI/UX Design", level: 80 },
  { name: "Git", level: 85 },
  { name: "GraphQL", level: 70 },
];

const TechStack = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.skill-bar');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="tech-stack" className="section bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-2 mb-10">
          <Code className="text-primary w-6 h-6" />
          <h2 className="section-heading">Technical Skills</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, idx) => (
            <div key={idx} className="reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="skill-bar h-full bg-primary origin-left scale-x-0 transition-transform duration-1000"
                  style={{ transform: `scaleX(${skill.level / 100})` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal">
          <h3 className="text-xl font-bold mb-4">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["MongoDB", "Firebase", "AWS", "Docker", "Redux", "Next.js", "TailwindCSS", "Figma"].map((tech, idx) => (
              <span key={idx} className="px-4 py-2 bg-background rounded-md border hover:border-primary/50 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
