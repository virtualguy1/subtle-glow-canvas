import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
const skills = [
  {
    name: "JavaScript",
    level: 90,
    category: "Languages",
  },
  {
    name: "TypeScript",
    level: 80,
    category: "Languages",
  },
  {
    name: "HTML/CSS",
    level: 95,
    category: "Languages",
  },
  {
    name: "React",
    level: 85,
    category: "Frameworks",
  },
  {
    name: "Node.js",
    level: 75,
    category: "Frameworks",
  },
  {
    name: "GraphQL",
    level: 70,
    category: "Data",
  },
  {
    name: "Git",
    level: 85,
    category: "Tools",
  },
  {
    name: "UI/UX Design",
    level: 80,
    category: "Design",
  },
];
const otherTechnologies = [
  {
    name: "MongoDB",
    category: "Database",
  },
  {
    name: "Firebase",
    category: "Backend",
  },
  {
    name: "AWS",
    category: "Cloud",
  },
  {
    name: "Docker",
    category: "DevOps",
  },
  {
    name: "Redux",
    category: "State Management",
  },
  {
    name: "Next.js",
    category: "Framework",
  },
  {
    name: "TailwindCSS",
    category: "Styling",
  },
  {
    name: "Figma",
    category: "Design",
  },
];
const levelToText = (level: number) => {
  if (level >= 90) return "Expert";
  if (level >= 80) return "Advanced";
  if (level >= 70) return "Proficient";
  if (level >= 50) return "Intermediate";
  return "Beginner";
};
const getLevelColorClass = (level: number) => {
  if (level >= 90) return "bg-accent/20 text-accent border-accent/50";
  if (level >= 80) return "bg-primary/10 text-primary border-primary/30";
  if (level >= 70) return "bg-secondary border-secondary/70";
  return "bg-muted border-muted/50";
};
const TechStack = () => {
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
    const revealElements = document.querySelectorAll(".reveal-item");
    revealElements.forEach((el) => observer.observe(el));
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  // Group other technologies by category
  const techByCategory = otherTechnologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, typeof otherTechnologies>);
  return (
    <section id="tech-stack" className="section bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="section-heading">Technical Skills</h2>
        </div>

        {/* Main skills section with categories */}
        <div className="space-y-8">
          {Object.entries(skillsByCategory).map(
            ([category, categorySkills], idx) => (
              <div
                key={category}
                className="reveal-item translate-y-4 transition-all duration-700"
                style={{
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                <h3 className="text-xl font-semibold mb-4 text-accent">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="group bg-card hover:bg-card/80 border border-border hover:border-accent/30 rounded-lg p-3 transition-all duration-300 shadow-sm hover:shadow flex items-center gap-3"
                    >
                      <span className="font-medium">{skill.name}</span>
                      <Badge
                        variant="outline"
                        className={`${getLevelColorClass(
                          skill.level
                        )} transition-colors`}
                      >
                        {levelToText(skill.level)}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        <Separator className="my-4 reveal-item opacity-0 transition-all duration-700" />

        {/* Other technologies section */}
        <div className="mt-8 reveal-item translate-y-4 transition-all duration-700">
          <h3 className="text-xl font-bold mb-6 text-accent">Additional Technologies</h3>

          <div className="flex flex-wrap gap-3">
            {Object.entries(techByCategory).map(([category, techs], idx) => (
              <div
                key={category}
                className="transition-all duration-500"
                style={{
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, techIdx) => (
                    <Badge
                      key={techIdx}
                      variant="secondary"
                      className="px-3 py-1.5 text-sm hover:bg-accent/10 hover:border-accent/30 transition-colors cursor-default"
                    >
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default TechStack;
