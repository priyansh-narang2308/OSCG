"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import { motion, Variants } from "framer-motion";

const faqs = [
  {
    question: "How do I register for the event?",
    answer:
      "Registration is simple! Click the 'Register Now' button on our homepage, fill out the registration form with your details, and you'll receive a confirmation email with your ticket and event details.",
  },
  {
    question: "Is there a code of conduct for participants?",
    answer:
      "Yes, we have a comprehensive code of conduct that ensures a safe, inclusive, and respectful environment for all participants.",
  },
  {
    question: "What kind of projects will be showcased?",
    answer:
      "We showcase a diverse range of open source projects including cloud infrastructure, developer tools, AI/ML frameworks, and community-driven initiatives.",
  },
  {
    question: "Can I submit my own project for consideration?",
    answer:
      "Absolutely! We encourage participants to submit their open source projects through our submission portal.",
  },
  {
    question: "Are there networking opportunities at the event?",
    answer:
      "Yes! We have dedicated networking sessions, workshops, and social events designed to help you connect with other developers and industry leaders.",
  },
  {
    question: "Will I get a certificate of participation?",
    answer:
      "Yes, all registered participants will receive a digital certificate of participation upon completion of the event.",
  },
  {
    question: "What are the career opportunities available?",
    answer:
      "Our hiring partners are actively recruiting open source developers. You'll have access to exclusive job opportunities and career counseling sessions.",
  },
  {
    question: "Is there a refund policy for registration?",
    answer:
      "Yes, we offer full refunds up to 14 days before the event. Please refer to our terms and conditions for more details.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const FAQ = () => {
  return (
    <section className="py-5 bg-[#090E1A]">
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
            Frequently Asked <span className="text-[#4FD1D0]">Questions</span>
          </motion.h2>

          <motion.p
            className="mx-auto max-w-2xl text-white/80"
            variants={fadeUp}
          >
            Find answers to common questions about OSCG 2026
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeUp}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <AccordionItem
                    value={`item-${index}`}
                    className="rounded-lg bg-[#161A26] px-6"
                  >
                    <AccordionTrigger className="text-left text-white hover:no-underline cursor-pointer [&>svg]:text-[#00D4AA]">
                      {faq.question}
                    </AccordionTrigger>

                    <AccordionContent className="text-white/60">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>

        <motion.div
          className="mx-auto mt-20 w-[890px] max-w-full rounded-3xl bg-[#161A26]/60 backdrop-blur-md border border-white/10 p-12 text-center shadow-lg"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h3 className="mb-3 text-2xl font-semibold text-white">
            Still have questions?
          </h3>
          <p className="mb-8 text-white/60 text-lg">
            Our support team is here to help you with any queries
          </p>
          <Button
            size="lg"
            className="cursor-pointer text-black/80 bg-linear-to-r from-[#5BE7B5] to-[#82D4FA] hover:opacity-90 rounded-full px-10 py-4 font-semibold shadow-md transition-all"
          >
            Contact Support
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
