
import React from 'react';
import { User } from 'lucide-react';

const Header = () => {
  return (
    <header className="min-h-[90vh] flex flex-col justify-center items-center px-4 md:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto text-center animate-fade-in">
        <div className="flex items-center justify-center mb-6">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
            <User className="text-primary w-12 h-12" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">John Doe</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-6">Software Engineer & UX Designer</p>
        <div className="max-w-lg mx-auto">
          <p className="text-base md:text-lg mb-8">
            I build exceptional and accessible digital experiences for the web. Focused on creating intuitive and user-friendly applications that solve real-world problems.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <a 
            href="#experience" 
            className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            My Experience
          </a>
          <a 
            href="#projects" 
            className="px-6 py-3 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
