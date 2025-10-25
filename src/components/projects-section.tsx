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
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Our <span className="text-primary">Projects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Discover innovative open source projects that are shaping the future
            of technology
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
