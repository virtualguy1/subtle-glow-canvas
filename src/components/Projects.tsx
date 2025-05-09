
import React, { useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const projects = [{
  title: "E-commerce Platform",
  description: "A full-stack e-commerce solution with product management, cart functionality and payment processing.",
  tags: ["React", "Node.js", "MongoDB"],
  link: "#"
}, {
  title: "Portfolio Website",
  description: "A minimalist portfolio template with smooth animations and responsive design for professionals.",
  tags: ["React", "Tailwind CSS", "Framer Motion"],
  link: "#"
}, {
  title: "Task Management App",
  description: "A productivity app that helps users organize tasks with features like drag-and-drop and priority sorting.",
  tags: ["TypeScript", "React", "Firebase"],
  link: "#"
}];

const Projects = () => {
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
    const revealElements = document.querySelectorAll('.project-card');
    revealElements.forEach(el => observer.observe(el));
    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  return <section id="projects" className="section">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-10">
          <h2 className="section-heading">Featured Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="project-card reveal opacity-0 translate-y-4 transition-all duration-700" 
              style={{
                transitionDelay: `${idx * 150}ms`
              }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:border-accent/80 overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Separator className="mt-2 bg-border/60" />
                </CardHeader>
                
                <CardContent className="py-4 flex-grow">
                  <CardDescription className="mb-4 text-sm">{project.description}</CardDescription>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIdx) => (
                      <Badge 
                        key={tagIdx} 
                        variant="secondary" 
                        className="rounded-full text-xs font-normal py-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <Separator className="bg-border/60" />
                
                <CardFooter className="pt-4 pb-4">
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-accent/50 text-accent hover:bg-accent/10 hover:text-accent gap-2"
                  >
                    <a href={project.link}>
                      View Project
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>;
};

export default Projects;
