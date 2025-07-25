import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Memory Game",
    description: "A beautiful game to enhance your visual memory.",
    image: "/projects/project1.jpg",
    tags: ["React", "TailwindCSS", "Hooks"],
    demoUrl: "https://memorygame-123.netlify.app/",
    githubUrl: "https://github.com/Aravind5Mukundam/memorygame",
  },
  {
    id: 2,
    title: "Fake Store",
    description:
      "Interactive Full-featured e-commerce page with filters and add favourite functionality.",
    image: "/projects/project2.png",
    tags: ["React", "Redux", "Tailwindcss"],
    demoUrl: "https://fake-store-app-aravind.netlify.app/",
    githubUrl: "https://github.com/Aravind5Mukundam/fake-store-app",
  },
  {
    id: 3,
    title: "JournNew",
    description:
      "Capture your thoughts, track your moods, and reflect on your journey in a beautiful, secure space.",
    image: "/projects/project3.png",
    tags: ["React", "Nextjs", "NeonDb","Clerk"],
    demoUrl: "https://journ-new-ed8c.vercel.app/",
    githubUrl: "https://github.com/Aravind5Mukundam/journNew",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1"> 
                    {project.title}
                </h3>
                <p className="text-muted-foregorund text-sm mb-4">
                    {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Aravind5Mukundam"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
