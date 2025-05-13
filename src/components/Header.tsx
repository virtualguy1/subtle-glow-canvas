import React from "react";
import { User } from "lucide-react";
const Header = () => {
  return (
    <header className="min-h-[40vh] flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="flex items-center justify-center mb-4"></div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
          John Doe
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-4">
          Software Engineer & UX Designer
        </p>
        <div className="max-w-lg mx-auto">
          <p className="text-base mb-6">
            I build exceptional and accessible digital experiences for the web.
            Focused on creating intuitive and user-friendly applications that
            solve real-world problems.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="#experience"
            className="px-5 py-2 rounded-md bg-accent text-accent-foreground hover:bg-accent/80 transition-colors"
          >
            My Experience
          </a>
          <a
            href="#projects"
            className="px-5 py-2 rounded-md border border-accent text-accent hover:bg-accent/10 transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
