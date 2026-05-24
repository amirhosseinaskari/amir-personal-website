const experiences = [
  {
    title: "Senior Software Engineer & Tech Lead",
    company: "THG",
    location: "Manchester, UK",
    period: "May 2022 – Present",
    highlights: [
      "Implemented React/Next.js marketing app for major clients, enhancing marketing capabilities",
      "Developed drag-and-drop email builder, reducing customization time by 10 hours daily",
      "Built multi AI agent email template generation with Gemini and Opik, accelerating template creation",
      "Designed workflow editor enabling users to draw and publish customer journey flows using Java and React/Next.js",
      "Established Storybook design system to standardize UI components and speed up development",
      "Designed accessible, compliance-focused user interfaces aligned with WCAG accessibility standards",
    ],
    aiRelated: true,
  },
  {
    title: "Senior Frontend Engineer",
    company: "SnappFood",
    location: "Tehran",
    period: "2012 – 2022",
    highlights: [
      "Improved restaurant listing page load time from 8s to under 2.5s by optimizing rendering and images",
      "Developed client chunk caching strategy, enhancing app performance",
      "Participated in data collection by tracking user behavior with RudderStack",
      "Developed and maintained scalable React-based web and PWA applications, including a React Native mobile experience",
      "Worked with modern state management solutions such as Redux to manage complex application state",
    ],
    aiRelated: false,
  },
  {
    title: "Full Stack Web Developer",
    company: "Shopikar",
    location: "Tehran",
    period: "2018 – 2012",
    highlights: [
      "Developed a CMS page builder that reduced development handoffs",
      "Implemented RESTful APIs in ASP.NET Core to streamline client data flows",
      "Built e-commerce features and frontend interfaces with React, JavaScript, and .NET Core",
      "Applied domain-driven and test-driven development to deliver reliable web apps",
      "Collaborated in Agile teams to accelerate delivery cycles and improve release predictability",
    ],
    aiRelated: false,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Experience
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "" : "md:direction-rtl"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 ${
                    exp.aiRelated ? "bg-primary" : "bg-muted-foreground"
                  }`}
                  style={{ top: "1.5rem" }}
                />

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <div
                    className={`p-6 rounded-xl border transition-all hover:border-primary/30 ${
                      exp.aiRelated
                        ? "bg-primary/5 border-primary/20"
                        : "bg-secondary/30 border-border"
                    }`}
                  >
                    <div className={index % 2 === 0 ? "md:text-right" : ""}>
                      <p className="text-sm text-primary font-mono mb-1">
                        {exp.period}
                      </p>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {exp.company} · {exp.location}
                        {exp.aiRelated && (
                          <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                            AI Work
                          </span>
                        )}
                      </p>
                    </div>
                    <ul
                      className={`space-y-2 text-sm text-muted-foreground ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 ${
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <span className="text-primary mt-1 flex-shrink-0">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
