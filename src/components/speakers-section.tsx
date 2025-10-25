import { ChevronLeft, ChevronRight, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const speakers = [
  {
    initials: "DSC",
    name: "Dr. Sarah Chen",
    title: "Chief Technology Officer, CloudTech Inc.",
    expertise: "Cloud Architecture & Microservices",
  },
  {
    initials: "MR",
    name: "Marcus Rodriguez",
    title: "Open Source Advocate, GitHub",
    expertise: "Developer Relations & Community Building",
  },
  {
    initials: "AP",
    name: "Aisha Patel",
    title: "Principal Engineer, Meta",
    expertise: "Frontend Architecture & Performance",
  },
];

const SpeakersSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Our <span className="text-primary">Speakers</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Learn from industry leaders and open source pioneers who are driving
            innovation forward
          </p>
        </div>

        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="grid gap-6 md:grid-cols-3">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="rounded-lg border border-border bg-card p-8 text-center"
              >
                <div className="mb-6 flex justify-center">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary text-3xl font-bold text-background">
                    {speaker.initials}
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{speaker.name}</h3>
                <p className="mb-1 text-sm text-primary">{speaker.title}</p>
                <p className="mb-4 text-sm text-muted-foreground">
                  {speaker.expertise}
                </p>
                <div className="flex justify-center gap-3">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
