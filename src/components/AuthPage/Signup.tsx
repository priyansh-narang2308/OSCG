"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { FaGoogle } from "react-icons/fa";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen bg-[#090E1A] flex items-center justify-center px-4">
      <div className="bg-[#2B303B] text-white w-full max-w-md rounded-2xl shadow-xl p-8 space-y-6 my-20">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/logo1.png"
              alt="Logo"
              width={70}
              height={70}
              className="rounded-lg cursor-pointer"
            />
          </div>
          <h2 className="text-[28px] font-bold">Join OSCG</h2>
          <p className="text-[15px] text-[#94A3B8] mt-1">
            Create your account to get started
          </p>
        </div>

        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full bg-[#101318] border border-[#272C35] text-[#FCFBF8] hover:text-white hover:bg-[#1a1f25] cursor-pointer flex items-center justify-center gap-2"
          >
            <Github size={16} />
            Sign up with GitHub
          </Button>

          <Button className="w-full bg-white text-[#111827] hover:bg-[#e5e7eb] cursor-pointer flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
                  className="scale-125"

              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Sign up with Google
          </Button>
        </div>

        <div className="flex items-center justify-center text-gray-500 text-sm">
          <span className="w-1/5 border-b border-gray-600"></span>
          <span className="mx-2 text-[13.5px] font-normal text-[#94A3B8]">
            OR SIGN UP WITH EMAIL
          </span>
          <span className="w-1/5 border-b border-gray-600"></span>
        </div>

        <form className="space-y-4">
          <div>
            <label className="text-[14px] text-[#FCFBF8]">Full name</label>
            <div className="relative mt-1">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="John Doe"
                className="w-full pl-10 pr-3 py-2 rounded-lg bg-[#101318] text-white border border-gray-700 focus:outline-none focus:border-[#11D493]"
              />
            </div>
          </div>

          <div>
            <label className="text-[14px] text-[#FCFBF8]">Email address</label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full pl-10 pr-3 py-2 rounded-lg bg-[#101318] text-white border border-gray-700 focus:outline-none focus:border-[#11D493]"
              />
            </div>
          </div>

          <div>
            <label className="text-[14px] text-[#FCFBF8]">
              Password (min. 6 characters)
            </label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="w-full pl-10 pr-10 py-2 rounded-lg bg-[#101318] text-white border border-gray-700 focus:outline-none focus:border-[#11D493]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-[#11D493] cursor-pointer transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div>
            <label className="text-[14px] text-[#FCFBF8]">
              Confirm password
            </label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm your password"
                className="w-full pl-10 pr-10 py-2 rounded-lg bg-[#101318] text-white border border-gray-700 focus:outline-none focus:border-[#11D493]"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-[#11D493] cursor-pointer transition-colors"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full py-2 bg-[#11D493] text-[#101318] rounded-lg font-semibold text-[14px] hover:bg-[#0ec28a] transition-colors cursor-pointer"
          >
            Create Account
          </Button>
        </form>

        <p className="text-center text-[15px] text-gray-400">
          Already have an account?{" "}
          <Button
            asChild
            variant="link"
            className="text-[#11D493] font-semibold p-0 hover:underline cursor-pointer"
          >
            <Link href="/sign-in">Sign in</Link>
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
