"use client";

import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "../ui/button";
import { motion, Variants } from "framer-motion";

const articles = [
  {
    category: "Trends",
    image: "Image ",
    date: "March 18, 2025",
    readTime: "5 min read",
    title: "The Future of Open Source: Trends to Watch in 2025",
    description:
      "Explore the emerging trends shaping the open source landscape, from AI-powered development tools to decentralized...",
    author: "Sarah Chen",
  },
  {
    category: "Development",
    image: "Image ",
    date: "March 12, 2025",
    readTime: "8 min read",
    title: "Building Scalable Cloud-Native Applications",
    description:
      "Learn best practices for architecting and deploying cloud-native applications using containerization and microservices",
    author: "Marcus Rodriguez",
  },
  {
    category: "Community",
    image: "Image ",
    date: "March 10, 2025",
    readTime: "6 min read",
    title: "Community-Driven Innovation: Success Stories",
    description:
      "Discover how open source communities are solving real-world problems through collaborative development and shared",
    author: "Priya Sharma",
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

const LatestInsights = () => {
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
            Latest <span className="text-[#4FD1D0]">Insights</span>
          </motion.h2>

          <motion.p
            className="mx-auto max-w-2xl text-white/80"
            variants={fadeUp}
          >
            Stay updated with the latest news, tutorials, and insights from the
            open source community
          </motion.p>
        </motion.div>

        <motion.div
          className="mb-12 grid gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {articles.map((article, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-lg border border-border bg-[#0A0F1B]"
            >
              <div className="relative h-48 bg-[#0A0F1B] flex items-center justify-center">
                <span className="text-white">{article.image}</span>
                <div className="absolute left-4 top-4 rounded-full bg-background px-3 py-1 text-xs font-medium">
                  {article.category}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1 text-white/70">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1 text-white/70">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </div>
                </div>

                <h3 className="mb-2 text-lg font-semibold text-white">
                  {article.title}
                </h3>

                <p className="mb-4 text-sm text-white/50">
                  {article.description}
                </p>

                <hr className="border-t border-white/30" />

                <div className="flex items-center mt-3 justify-between">
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <User className="h-4 w-4" />
                    {article.author}
                  </div>

                  <Button
                    variant="link"
                    className="h-auto p-0 text-[#00D4AA] cursor-pointer"
                  >
                    Read
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center px-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Button
            size="lg"
            className="cursor-pointer text-black bg-[#5bebb5] hover:bg-[#4dddabd3] rounded-full px-10 py-4 font-semibold shadow-lg"
          >
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestInsights;
