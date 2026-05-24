import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-foreground font-medium mb-1">
              Amirhossein Askari
            </p>
            <p className="text-sm text-muted-foreground">
              Senior Software Engineer · Manchester, UK
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/amirhossein-askari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/amirhossein-askari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:amiraskari.it@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Amirhossein Askari. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
