import { Bot, Code2, Cloud, Database, Layers, Paintbrush } from "lucide-react";

const skillCategories = [
  {
    title: "AI & Agents",
    icon: Bot,
    highlighted: true,
    skills: ["AI Agents", "Gemini", "Opik", "LLM Integration", "Prompt Engineering"],
  },
  {
    title: "Frontend",
    icon: Code2,
    highlighted: false,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Sass"],
  },
  {
    title: "Backend",
    icon: Database,
    highlighted: false,
    skills: ["Node.js", "Java", "Spring", "C#", "ASP.NET", "REST APIs", "GraphQL"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    highlighted: false,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git"],
  },
  {
    title: "Architecture",
    icon: Layers,
    highlighted: false,
    skills: ["System Design", "Microservices", "Domain-Driven Design", "Test-Driven Development"],
  },
  {
    title: "UI/UX",
    icon: Paintbrush,
    highlighted: false,
    skills: ["Storybook", "Design Systems", "WCAG Accessibility", "Responsive Design"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Skills & Technologies
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`p-6 rounded-xl border transition-all hover:border-primary/50 ${
                  category.highlighted
                    ? "bg-primary/10 border-primary/30"
                    : "bg-secondary/50 border-border"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2 rounded-lg ${
                      category.highlighted
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                  <h3
                    className={`font-semibold ${
                      category.highlighted ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {category.title}
                    {category.highlighted && (
                      <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                        Featured
                      </span>
                    )}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-3 py-1.5 rounded-full ${
                        category.highlighted
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
