
import React, { useEffect } from 'react';
import { Code } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "HTML/CSS", level: 95 },
  { name: "UI/UX Design", level: 80 },
  { name: "Git", level: 85 },
  { name: "GraphQL", level: 70 }
];

const levelToText = (level: number) => {
  if (level >= 90) return "Expert";
  if (level >= 80) return "Advanced";
  if (level >= 70) return "Proficient";
  if (level >= 50) return "Intermediate";
  return "Beginner";
};

const TechStack = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1
    });
    
    const revealElements = document.querySelectorAll('.reveal-item');
    revealElements.forEach(el => observer.observe(el));
    
    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="tech-stack" className="section bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Code className="text-accent" size={24} />
          <h2 className="section-heading">Technical Skills</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, idx) => (
            <Card 
              key={idx} 
              className="reveal-item opacity-0 translate-y-4 transition-all duration-700 hover:border-accent/50 hover:shadow-md"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <CardContent className="p-5">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                  <Badge 
                    variant="outline" 
                    className={`
                      px-3 py-1 
                      ${skill.level >= 90 ? 'bg-accent/20 text-accent border-accent/50' : 
                        skill.level >= 80 ? 'bg-primary/10 text-primary border-primary/30' : 
                        skill.level >= 70 ? 'bg-secondary border-secondary/70' : 
                        'bg-muted border-muted/50'}
                    `}
                  >
                    {levelToText(skill.level)}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center reveal-item opacity-0 translate-y-4 transition-all duration-700">
          <h3 className="text-xl font-bold mb-4">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["MongoDB", "Firebase", "AWS", "Docker", "Redux", "Next.js", "TailwindCSS", "Figma"].map((tech, idx) => (
              <Badge 
                key={idx} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-accent/10 hover:border-accent/30 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
