import { Bot, Play, Workflow, Mail as MailIcon } from "lucide-react";

const featuredProjects = [
  {
    title: "Multi AI Agent Email Generator",
    description:
      "Built a multi AI agent system using Gemini and Opik that accelerates email template creation for marketing campaigns. The agents collaborate to generate, refine, and optimize email content based on campaign goals.",
    tags: ["AI Agents", "Gemini", "Opik", "React", "Next.js"],
    icon: Bot,
    highlighted: true,
    hasVideo: true,
    videoUrl: "/video01.mp4",
    videoPlaceholder: "AI Agent Demo",
  },
  {
    title: "Visual Workflow Editor",
    description:
      "Designed and developed a visual workflow editor enabling users to draw and publish customer journey flows. Built with Java backend and React/Next.js frontend, supporting drag-and-drop interactions.",
    tags: ["Java", "React", "Next.js", "TypeScript", "Canvas"],
    icon: Workflow,
    highlighted: true,
    hasVideo: true,
    videoPlaceholder: "Workflow Editor Demo",
  },
  {
    title: "Drag-and-Drop Email Builder",
    description:
      "Developed an intuitive drag-and-drop email builder that reduced customization time by 10 hours daily. Features real-time preview, responsive templates, and seamless integration with marketing platforms.",
    tags: ["React", "TypeScript", "Node.js", "Storybook"],
    icon: MailIcon,
    highlighted: false,
    hasVideo: false,
  },
];

export function FeaturedWork() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Featured Work
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="space-y-8">
          {featuredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className={`p-6 md:p-8 rounded-xl border transition-all ${
                  project.highlighted
                    ? "bg-primary/5 border-primary/30 hover:border-primary/50"
                    : "bg-card border-border hover:border-primary/30"
                }`}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`p-2 rounded-lg ${
                          project.highlighted
                            ? "bg-primary/20 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {project.title}
                        </h3>
                        {project.highlighted && (
                          <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                            AI Featured
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.hasVideo && (
                    <div className="flex items-center justify-center">
                      {project.videoUrl ? (
                        <div className="w-full aspect-video bg-secondary/50 rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-colors">
                          <video
                            className="w-full h-full object-cover"
                            controls
                            preload="metadata"
                          >
                            <source src={project.videoUrl} type="video/mp4" />
                            <source src={project.videoUrl} type="video/quicktime" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      ) : (
                        <div className="w-full aspect-video bg-secondary/50 rounded-lg border border-border flex items-center justify-center group cursor-pointer hover:border-primary/50 transition-colors">
                          <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/30 transition-colors">
                              <Play
                                className="text-primary ml-1"
                                size={28}
                                fill="currentColor"
                              />
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {project.videoPlaceholder}
                            </p>
                            <p className="text-xs text-muted-foreground/70 mt-1">
                              Video {index + 1}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
