"use client";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "About us", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Speakers", href: "#speakers" },
  { label: "Leaderboard", href: "#leaderboard" },
  { label: "Team", href: "#team" },
  { label: "Timeline", href: "#timeline" },
  { label: "Blog", href: "#blog" },
];

const Navigation = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50  backdrop-blur-md"
      style={{ backgroundColor: "#0B0F17" }}
    >
      <div className="container mx-auto px-5">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={34}
                height={34}
                className="rounded-lg cursor-pointer"
              />
            </Link>
            <span className="hidden sm:inline text-lg font-semibold text-white">
              Open Source Connect <span className="text-[#00D4AA]">Global</span>
            </span>
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
            <Button className="border-2 border-[#6FE7C1] text-white cursor-pointer bg-transparent rounded-xl px-5 py-2 font-semibold hover:bg-[#1a2e31] transition-colors">
              Sign In
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-gray-200 hover:text-[#6FE7C1]"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[280px] sm:w-[340px] bg-[#0B0F17] flex flex-col items-center pt-16"
              >
                <SheetHeader className="absolute top-5 left-6">
                  <SheetTitle className="text-white text-lg font-semibold tracking-wide">
                    Menu
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col items-center gap-6 mt-8 w-full">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="relative text-lg font-medium text-gray-200 group"
                    >
                      <span className="group-hover:text-[#6FE7C1] transition-colors duration-300">
                        {item.label}
                      </span>
                      <span className="absolute left-0 bottom-1 h-0.5 w-0 bg-[#6FE7C1] transition-all duration-300 group-hover:w-full" />
                    </Link>
                  ))}
                </div>

                <Button className="mt-10 w-[70%] border-2 border-[#6FE7C1] text-white bg-transparent rounded-xl py-2 font-semibold hover:bg-[#6FE7C1] hover:text-[#0B0F17] transition-all duration-300">
                  Sign In
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
