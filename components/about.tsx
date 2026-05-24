export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            About Me
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Senior Software Engineer with{" "}
              <span className="text-foreground font-medium">8+ years</span> of
              experience building scalable, high-performance applications. I
              specialize in{" "}
              <span className="text-foreground font-medium">
                Node.js, React, Next.js, TypeScript, Java, C#, and AWS
              </span>
              .
            </p>
            <p>
              I have a proven track record of delivering high-impact solutions,
              including{" "}
              <span className="text-primary font-medium">
                AI agent–driven marketing platforms
              </span>
              , visual workflow tools, and design systems that improve
              operational efficiency and developer productivity.
            </p>
            <p>
              Strong experience working in Agile environments, leading
              cross-functional collaboration, and delivering secure, high-quality
              code for compliance-focused teams. I&apos;m passionate about creating
              accessible, WCAG-compliant user interfaces.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-foreground font-medium mb-4">Quick Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-primary">▹</span>
                <div>
                  <p className="text-muted-foreground">Location</p>
                  <p className="text-foreground">Manchester, UK</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary">▹</span>
                <div>
                  <p className="text-muted-foreground">Current Role</p>
                  <p className="text-foreground">Senior Engineer & Tech Lead</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary">▹</span>
                <div>
                  <p className="text-muted-foreground">Education</p>
                  <p className="text-foreground">BSc Computer Science</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
