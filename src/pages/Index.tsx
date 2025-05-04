
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import ThemeToggle from '@/components/ThemeToggle';

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
    <div className="min-h-screen px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
      <ThemeToggle />
      <Header />
      <Experience />
      <Projects />
      <TechStack />
      
      <footer className="py-6 text-center text-muted-foreground border-t">
        <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        <div className="mt-3 flex justify-center space-x-4">
          <a href="#" className="hover:text-accent transition-colors">GitHub</a>
          <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-accent transition-colors">Twitter</a>
          <a href="mailto:hello@example.com" className="hover:text-accent transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
