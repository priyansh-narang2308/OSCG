"use client";
import { BookOpen, Lightbulb, Users } from "lucide-react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = Math.ceil(end / (duration / 16));

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      countRef.current = start;
      setCount(start);
    }, 16);

    return () => clearInterval(counter);
  }, [end]);

  return <>{count.toLocaleString()}+</>;
};

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const fadeUp: Variants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      rotateX: -10
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 0.7, 
        ease: "easeOut",
      },
    },
  };

  const statVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "backOut"
      },
    },
  };

  const missionVariants: Variants = {
    hidden: { 
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      },
    },
  };

  return (
    <section
      ref={ref}
      className="py-20 bg-[#090E1A] text-white relative overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.1 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#4AD0CD] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-[#6ACFDD] rounded-full blur-3xl"></div>
      </motion.div>

      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 C100,100 900,100 1200,0 L1200,120 L120,120 Z"
            className="fill-[#0A1628]"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-16 text-center"
        >
          <motion.h2 
            variants={fadeUp}
            className="mb-6 text-4xl font-bold md:text-5xl"
          >
            About <span className="text-[#4AD0CD]">Us</span>
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="mx-auto max-w-3xl text-lg text-white/80"
          >
            Open Source Connect Global is a worldwide movement celebrating the
            power of open collaboration. We bring together developers, creators,
            and innovators to shape the future of technology through shared
            knowledge and collective innovation.
          </motion.p>
        </motion.div>

        <motion.div
          variants={missionVariants}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="max-w-6xl w-full px-4">
            <motion.div 
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="mb-16 rounded-lg border-l-4 border-[#3BD1C8] bg-[#161B27] p-8 relative overflow-hidden"
            >
              <motion.div 
                className="absolute inset-0 bg-linear-to-r from-[#3BD1C8]/10 to-transparent"
                initial={{ x: "-100%" }}
                animate={isInView ? { x: 0 } : { x: "-100%" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
              <div className="relative z-10">
                <h3 className="mb-4 text-2xl font-semibold text-white">
                  Our Mission
                </h3>
                <p className="text-white/80">
                  To create a global platform where open source enthusiasts can
                  connect, collaborate, and contribute to projects that make a
                  difference. We believe in the power of community-driven
                  innovation and the democratization of technology through open
                  collaboration. We actively tear down barriers to entry,
                  providing the tools and knowledge necessary for anyone to become
                  a contributor. Our goal is to foster a truly inclusive future,
                  built by the hands of a global and diverse community.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="mb-16 grid gap-6 md:grid-cols-3"
          >
            {[
              {
                icon: <Users className="h-6 w-6 text-white" />,
                title: "Community",
                desc: "Building bridges between developers, innovators, and open source enthusiasts worldwide",
              },
              {
                icon: <BookOpen className="h-6 w-6 text-white" />,
                title: "Learning",
                desc: "Empowering individuals through knowledge sharing, workshops, and collaborative experiences",
              },
              {
                icon: <Lightbulb className="h-6 w-6 text-white" />,
                title: "Innovation",
                desc: "Driving technological advancement through collaborative problem-solving and creative solutions",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                
                className="flex justify-center"
              >
                <div className="rounded-lg border border-white/40 bg-[#161B26] p-6 max-w-sm w-full relative overflow-hidden group">
                  <motion.div 
                    className="absolute inset-0 bg-linear-to-br from-[#3BD1C8]/20 to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.4 }}
                  />
                  
                  <motion.div 
                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#2FD2C1] relative z-10"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="mb-3 text-xl font-semibold relative z-10">{item.title}</h3>
                  <p className="text-md text-white/80 relative z-10">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid gap-8 text-center md:grid-cols-4"
        >
          {[
            { end: 10000, label: "Participants" },
            { end: 60, label: "Open Source Projects" },
            { end: 50, label: "Expert Speakers" },
            { end: 100, label: "Community Partners" },
          ].map((stat, i) => (
            <motion.div 
              key={i}

             
              className="p-4 rounded-lg bg-[#161B26]/50 backdrop-blur-sm border border-white/10"
            >
              <motion.div 
                className="mb-2 text-4xl font-bold text-[#6ACFDD]"
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                transition={{ 
                  delay: 0.8 + i * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
              >
                {isInView ? <Counter end={stat.end} /> : "0"}
              </motion.div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;