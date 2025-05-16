
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Check for user's system preference or saved preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <Toggle
      pressed={theme === "dark"}
      onPressedChange={toggleTheme}
      aria-label="Toggle dark mode"
      className="fixed top-4 right-4 z-10 size-10 rounded-full bg-background border border-border"
    >
      {theme === "dark" ? (
        <Sun className="size-4 text-accent" />
      ) : (
        <Moon className="size-4" />
      )}
    </Toggle>
  );
};

export default ThemeToggle;
