"use client";

import { ChevronLeft, ChevronRight, Linkedin, Twitter } from "lucide-react";
import { Button } from "../ui/button";
import { motion, Variants } from "framer-motion";

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

// Matching animation system
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
    rotateX: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const SpeakersSection = () => {
  return (
    <section className="py-10 bg-[#090E1A]">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-12 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2
            className="mb-4 text-4xl text-white font-bold md:text-5xl"
            variants={fadeUp}
          >
            Our <span className="text-[#4FD1D0]">Speakers</span>
          </motion.h2>

          <motion.p
            className="mx-auto max-w-2xl text-white/80"
            variants={fadeUp}
          >
            Learn from industry leaders and open source pioneers who are driving
            innovation forward
          </motion.p>
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
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
                <motion.div
                  key={index}
                  className="rounded-lg border border-border bg-[#111A2B] p-8 text-center"
                  variants={cardVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="mb-6 flex justify-center">
                    <motion.div
                      className="flex h-32 w-32 items-center justify-center rounded-full bg-[#1DD4BD] text-3xl font-bold text-background"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {speaker.initials}
                    </motion.div>
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
                </motion.div>
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
        </motion.div>
      </div>
    </section>
  );
};

export default SpeakersSection;
