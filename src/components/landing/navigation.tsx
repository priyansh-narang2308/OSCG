"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Speakers", href: "#speakers" },
  { label: "Leaderboard", href: "#leaderboard" },
  { label: "Team", href: "#team" },
  { label: "Timeline", href: "#timeline" },
  { label: "Blog", href: "#blog" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{ backgroundColor: "#0B0F17" }}
    >
      <div className="container mx-auto px-5">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3 pl-10">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-90 transition"
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={36}
                height={36}
                className="rounded-lg cursor-pointer"
              />
              <span className="hidden sm:inline text-lg font-semibold text-white tracking-wide">
                Open Source Connect{" "}
                <span className="text-[#00D4AA]">Global</span>
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-white font-medium transition-all group px-2 py-1"
              >
                <span className="relative z-10 group-hover:text-[#6FE7C1] transition-colors duration-300">
                  {item.label}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6FE7C1] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link href="/sign-in">
              <Button className="border-2 border-[#6FE7C1] text-white cursor-pointer bg-transparent rounded-xl px-5 py-2 font-semibold hover:bg-[#1a2e31] transition-colors">
                Sign In
              </Button>
            </Link>

            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-200 hover:text-[#6FE7C1] transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </motion.div>
              </Button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden fixed left-2 right-2 bg-[#0B0F17] border border-[#6FE7C1]/20 rounded-lg shadow-2xl overflow-hidden z-50"
              style={{ top: "4.5rem" }}
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="py-2 space-y-1 max-h-[55vh] overflow-y-auto">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-6 py-3 text-white hover:text-[#6FE7C1] hover:bg-[#6FE7C1]/10 transition-all duration-200 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  className="border-t border-[#6FE7C1]/20 my-2"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                />

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: (navItems.length + 1) * 0.1,
                  }}
                  className="px-6 py-2"
                >
                  <Button
                    className="w-full border-2 border-[#6FE7C1] text-white bg-transparent rounded-xl py-3 font-semibold hover:bg-[#6FE7C1] hover:text-[#0B0F17] transition-all duration-300 text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
