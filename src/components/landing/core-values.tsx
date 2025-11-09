"use client";
import { motion } from "framer-motion";
import { Users, GraduationCap, Lightbulb } from "lucide-react";

const CoreValues = () => {
  const values = [
    {
      icon: Users,
      title: "Community",
      description:
        "Building bridges between developers worldwide, fostering collaboration and knowledge sharing",
    },
    {
      icon: GraduationCap,
      title: "Learning",
      description:
        "Empowering growth through workshops, talks, and hands-on experiences with cutting-edge tech",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Showcasing groundbreaking projects that push the boundaries of open source development",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.6, rotate: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="min-h-screen bg-[#090E1A] flex items-center justify-center py-20 px-4 overflow-hidden">
      <motion.div
        className="max-w-7xl w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="flex justify-center mb-6" variants={fadeUp}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/20 bg-[#0B222B]">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-[#1AD5BD]" />
            </div>
            <span className="text-sm font-medium tracking-wider text-[#1AD5BD]">
              WHAT DRIVES US FORWARD
            </span>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-[#1AD5BD]" />
            </div>
          </div>
        </motion.div>

        <motion.div className="flex justify-center mb-12" variants={fadeUp}>
          <div className="w-24 h-1 bg-[#039D86] rounded-full"></div>
        </motion.div>

        <motion.div className="text-center mb-6" variants={fadeUp}>
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Our Core <span className="text-[#5BCFD6]">Values</span>
          </h2>
        </motion.div>

        <motion.div
          className="text-center mb-4 max-w-3xl mx-auto"
          variants={fadeUp}
        >
          <p className="text-xl text-white/60">
            At Open Source Connect Global, we believe in the power of{" "}
            <span className="text-[#00D6B2] font-medium">collaboration</span>,{" "}
            <span className="text-[#89CFEB] font-medium">
              continuous learning
            </span>
            , and{" "}
            <span className="text-[#00D6B2] font-medium">
              innovative thinking.
            </span>
          </p>
        </motion.div>

        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          variants={fadeUp}
        >
          <p className="text-white/60">
            These values guide every initiative we take and shape our vibrant
            community of developers, creators, and visionaries.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
        >
          {values.map((value, index) => {
            const backgroundColor = index === 1 ? "#203A53" : "#0D494D";

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                className="group relative p-8 rounded-3xl bg-[#0B1220] border border-[#202B47] hover:border-[#1AD5BD]/40 transition-all duration-500 overflow-hidden"
              >
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"
                  style={{
                    background: backgroundColor,
                    boxShadow: "0 0 25px 5px rgba(26, 213, 189, 0.08)",
                  }}
                ></div>

                <div className="relative z-10">
                  <motion.div className="mb-8" variants={iconVariants}>
                    <div
                      className="inline-flex p-5 rounded-2xl"
                      style={{
                        background: backgroundColor,
                        boxShadow:
                          index === 1
                            ? "0 4px 20px rgba(96, 165, 250, 0.15)"
                            : "0 4px 20px rgba(26, 213, 189, 0.15)",
                      }}
                    >
                      <value.icon
                        className={`w-8 h-8 ${
                          index === 1 ? "text-[#60A5FA]" : "text-[#1AD5BD]"
                        }`}
                        strokeWidth={1.5}
                      />
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {value.title}
                  </h3>

                  <p className="text-[#9CA3AF] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div className="flex justify-center" variants={fadeUp}>
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#0c3c40] bg-[#0E1523]">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-[#00D6B2]" />
              <div className="w-2 h-2 rounded-full bg-[#89CFEB]" />
              <div className="w-2 h-2 rounded-full bg-[#00D6B2]" />
            </div>
            <span className="text-sm font-medium text-white/80">
              Join us in building the future of open source
            </span>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-[#00D6B2]" />
              <div className="w-2 h-2 rounded-full bg-[#89CFEB]" />
              <div className="w-2 h-2 rounded-full bg-[#00D6B2]" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CoreValues;
