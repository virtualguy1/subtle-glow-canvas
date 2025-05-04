import React, { useEffect } from 'react';
import { FolderOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-2 mb-10">
          
          <h2 className="section-heading">Featured Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => <div key={idx} className="project-card reveal opacity-0 translate-y-4 transition-all duration-700" style={{
          transitionDelay: `${idx * 150}ms`
        }}>
              <Card className="h-full flex flex-col hover:shadow-md transition-all duration-300 hover:border-primary/40">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => <span key={tagIdx} className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                        {tag}
                      </span>)}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <a href={project.link}>View Project</a>
                  </Button>
                </CardFooter>
              </Card>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Projects;