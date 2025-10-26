import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Instagram, Mail, Phone, Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-[#090E1A] pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="mb-12 grid gap-12 text-center lg:text-left lg:grid-cols-4">
          <div className="flex flex-col items-center lg:items-start">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={34}
                  height={34}
                  className="rounded-lg cursor-pointer"
                />
              </div>
              <span className="text-lg font-semibold text-white">
                OSCG <span className="text-[#4FD1D0]">2026</span>
              </span>
            </div>
            <p className="mb-2 text-sm text-white/60 max-w-xs">
              Connecting the world through open source innovation and
              collaborative development.
            </p>

            <Link
              href="https://www.osconnect.org/"
              target="_blank"
              className="relative mt-3 inline-flex items-center justify-center rounded-xl border border-[#3AE3B8]/40 bg-[#0E1422] px-4 py-2 text-sm font-semibold text-[#5BEBB5] transition-all duration-300 hover:border-[#5BEBB5] hover:bg-[#1A2335] hover:shadow-[0_0_12px_#3AE3B8]/40"
            >
              <span className="relative z-10">
                Visit OSCI 2025 — our past event
              </span>
              <span className="absolute inset-0 rounded-xl bg-linear-to-r from-[#3AE3B8]/10 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
            </Link>

            <div className="mt-6 flex gap-3">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h4 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "about",
                "projects",
                "speakers",
                "sponsors",
                "blog",
                "register",
              ].map((section) => (
                <li key={section}>
                  <Link
                    href={`#${section}`}
                    className="text-white/40 hover:text-white/70 transition-colors"
                  >
                    {section.charAt(0).toUpperCase() +
                      section.slice(1).replace("-", " ")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h4 className="mb-4 text-lg font-semibold text-white">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Documentation",
                "Community Guidelines",
                "Code of Conduct",
                "FAQ",
                "Support",
                "Media Kit",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white/40 hover:text-white/70 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h4 className="mb-4 text-lg font-semibold text-white">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-[#4FD1D0]" />
                <div>
                  <div className="text-white/70">Email</div>
                  <Link
                    href="mailto:hello@oscg.org"
                    className="text-white transition-colors"
                  >
                    hello@oscg.org
                  </Link>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-[#4FD1D0]" />
                <div>
                  <div className="text-white/70">Phone</div>
                  <Link
                    href="tel:+916666666666"
                    className="text-white transition-colors"
                  >
                    +91 66666 66666
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-16 rounded-lg bg-[#181D28] p-8">
          <div className="flex flex-col items-center text-center gap-6 lg:flex-row lg:items-start lg:text-left lg:justify-between">
            <div>
              <h3 className="mb-2 text-2xl font-semibold text-white">
                Stay Updated
              </h3>
              <p className="text-white/80">
                Subscribe to our newsletter for the latest updates and
                announcements
              </p>
            </div>
            <div className="flex w-full max-w-md gap-2 justify-center lg:justify-start">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full bg-[#363A43] px-4 py-4 text-white placeholder:text-white/60 border-none focus:ring-2 focus:ring-green-500"
              />
              <Button className="cursor-pointer text-black bg-[#5bebb5] hover:bg-[#4dddabd3] rounded-full px-6 py-4 text-sm font-semibold shadow-lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center gap-4 border-t border-border pt-8 text-sm text-white/60 md:flex-row md:justify-between md:text-left">
          <p>&copy; 2026 Open Source Connect Global. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
