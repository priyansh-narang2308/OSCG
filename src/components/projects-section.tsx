import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "CloudNative Orchestrator",
    description:
      "A modern container orchestration platform built for scalability and performance",
    language: "Go",
    languageColor: "bg-cyan-500",
    stars: "12.5k",
    forks: "2.3k",
    borderColor: "border-t-blue-500",
  },
  {
    title: "DataFlow Pipeline",
    description:
      "Real-time data processing framework with distributed architecture",
    language: "Python",
    languageColor: "bg-blue-500",
    stars: "8.9k",
    forks: "1.5k",
    borderColor: "border-t-emerald-500",
  },
  {
    title: "ReactUI Components",
    description:
      "Comprehensive component library with accessibility-first design",
    language: "TypeScript",
    languageColor: "bg-blue-400",
    stars: "15.2k",
    forks: "3.1k",
    borderColor: "border-t-purple-500",
  },
  {
    title: "ML Vision Toolkit",
    description:
      "Computer vision library powered by cutting-edge machine learning models",
    language: "Python",
    languageColor: "bg-blue-500",
    stars: "9.8k",
    forks: "1.9k",
    borderColor: "border-t-orange-500",
  },
  {
    title: "SecureAuth Framework",
    description: "Enterprise-grade authentication and authorization solution",
    language: "Rust",
    languageColor: "bg-orange-600",
    stars: "6.7k",
    forks: "987",
    borderColor: "border-t-blue-400",
  },
  {
    title: "DevOps Automation",
    description:
      "Complete CI/CD automation suite for modern development workflows",
    language: "JavaScript",
    languageColor: "bg-yellow-500",
    stars: "11.3k",
    forks: "2.4k",
    borderColor: "border-t-amber-500",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-[#090E1A]">
      <div className="container mx-auto px-6 ">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl text-white font-bold md:text-5xl">
            Our <span className="text-[#4FD1D0]">Projects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-white/80">
            Discover innovative open source projects that are shaping the future
            of technology
          </p>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-lg border-t-8 ${project.borderColor} bg-[#161A26] p-6 transition-transform hover:scale-105`}
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#2D313B]">
                <Github className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 mt-2 text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mb-4 text-sm text-white/60">
                {project.description}
              </p>

              <div className="mb-4 flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1 bg-[#2D313B] rounded-xl px-2 py-1">
                  <div
                    className={`h-3 w-3 rounded-full ${project.languageColor}`}
                  />
                  <span className="text-white text-sm">{project.language}</span>
                </div>
              </div>

              <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1 text-white/70">
                  <Star className="h-4 w-4" />
                  {project.stars}
                </div>
                <div className="flex items-center gap-1 text-white/70">
                  <GitFork className="h-4 w-4" />
                  {project.forks}
                </div>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm text-[#00D4AA] hover:underline"
              >
                View Project
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center p-10">
          <Button
            size="lg"
            className=" cursor-pointer
      text-black                 
      bg-[#5bebb5]               
      hover:bg-[#4dddabd3]         
      rounded-full              
      px-10 py-4             
      font-semibold             
      shadow-lg                  
    "
          >
            Explore All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
