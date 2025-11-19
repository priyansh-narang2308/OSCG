"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

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

const SponsersSection = () => {
  return (
    <section className="py-20 bg-[#090E1A]">
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
            Our <span className="text-[#4FD1D0]">Sponsors</span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-white/80"
            variants={fadeUp}
          >
            Supported by industry leaders who believe in the power of open
            source innovation
          </motion.p>
        </motion.div>

        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            className="flex items-center justify-center mb-6"
            variants={fadeUp}
          >
            <div className="h-px w-12 bg-linear-to-r from-white to-transparent"></div>
            <h3 className="mx-3 text-white text-lg font-semibold">
              Platinum Sponsors
            </h3>
            <div className="h-px w-12 bg-linear-to-l from-white to-transparent"></div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            <motion.div
              variants={cardVariants}
              className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-[#131C29]"
            >
              <Image src={"/nex.png"} alt="google logo" width={280} height={280} />
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-[#131C29]"
            ></motion.div>
          </div>
        </motion.div>

        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            className="flex items-center justify-center mb-6"
            variants={fadeUp}
          >
            <div className="h-px w-12 bg-linear-to-r from-yellow-400 to-transparent"></div>
            <h3 className="mx-3 text-yellow-400 text-lg font-semibold">
              Gold Sponsors
            </h3>
            <div className="h-px w-12 bg-linear-to-l from-yellow-400 to-transparent"></div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="flex h-24 items-center justify-center rounded-lg border border-white/10 bg-[#131C29]"
              ></motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="mb-12 text-center" variants={fadeUp}>
            <h2 className="mb-4 text-4xl text-white font-bold">
              Hiring <span className="text-[#4FD1D0]">Partners</span>
            </h2>
            <p className="mx-auto max-w-2xl text-white/80">
              Connect with top companies actively seeking talented open source
              developers
            </p>
          </motion.div>

          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 max-w-5xl mx-auto">
            {["Stripe", "Vercel", "Shopify", "Meta", "Salesforce", "Adobe"].map(
              (company, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="flex h-20 items-center justify-center rounded-lg border border-white/10 bg-[#131C29]"
                ></motion.div>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="mb-12 text-center" variants={fadeUp}>
            <h2 className="mb-4 text-white text-4xl font-bold">
              Community <span className="text-[#4FD1D0]">Partners</span>
            </h2>
            <p className="mx-auto max-w-2xl text-white/80">
              Collaborating with open source foundations and communities
              worldwide
            </p>
          </motion.div>

          <div className="grid gap-6 grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto">
            {[
              "Linux Foundation",
              "ASF",
              "Cloud Native Foundation",
              "Mozilla",
              "Python Foundation",
              "OpenJS Foundation",
              "Eclipse Foundation",
              "Free Software Foundation",
            ].map((partner, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="flex h-24 items-center justify-center rounded-lg border border-white/10 bg-[#131C29]"
              ></motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsersSection;
