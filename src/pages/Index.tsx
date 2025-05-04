
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';

const Index = () => {
  useEffect(() => {
    // Scroll reveal animation
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

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Experience />
      <Projects />
      <TechStack />
      
      <footer className="py-8 text-center text-muted-foreground border-t">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="mailto:hello@example.com" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
