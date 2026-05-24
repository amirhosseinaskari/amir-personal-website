"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to an API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">05.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Get In Touch
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I&apos;m currently open to new opportunities and always interested in
              discussing innovative projects, especially those involving{" "}
              <span className="text-primary font-medium">AI agents</span> and
              modern web technologies. Feel free to reach out!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:amiraskari.it@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-primary/20 text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground group-hover:text-primary transition-colors">
                    amiraskari.it@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border">
                <div className="p-2 rounded-lg bg-muted text-muted-foreground">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground">+44 7538 258038</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border">
                <div className="p-2 rounded-lg bg-muted text-muted-foreground">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">Manchester, United Kingdom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
