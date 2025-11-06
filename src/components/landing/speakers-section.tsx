import { ChevronLeft, ChevronRight, Linkedin, Twitter } from "lucide-react";
import { Button } from "../ui/button";

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
    <section className=" bg-[#090E1A] py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl text-white font-bold md:text-5xl">
            Our <span className="text-[#4FD1D0]">Speakers</span>
          </h2>
          <p className="mx-auto max-w-2xl text-white/80">
            Learn from industry leaders and open source pioneers who are driving
            <br />
            innovation forward
          </p>
        </div>

        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex absolute -left-5 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card cursor-pointer hover:bg-white/90"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {speakers.map((speaker, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-border bg-[#111A2B] p-8 text-center"
                >
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#1DD4BD] text-3xl font-bold text-background">
                      {speaker.initials}
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl text-white font-semibold">
                    {speaker.name}
                  </h3>
                  <p className="mb-1 text-sm text-[#07CAAB]">{speaker.title}</p>
                  <p className="mb-4 text-sm text-white/70">
                    {speaker.expertise}
                  </p>
                  <div className="flex justify-center gap-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 bg-white cursor-pointer hover:bg-white/90"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 bg-white cursor-pointer hover:bg-white/90"
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex absolute -right-5 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card cursor-pointer hover:bg-white/90"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
