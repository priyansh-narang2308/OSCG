"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { signInWithEmail, signInWithGoogle, signInWithGitHub } from "@/lib/supabase/auth";
import { toast } from "sonner";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [emailLoading, setEmailLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [githubLoading, setGithubLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEmailSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailLoading(true);

    if (!formData.email.trim() || !formData.password.trim()) {
      toast.error("Please fill in all fields");
      setEmailLoading(false);
      return;
    }

    try {
      const { user, error } = await signInWithEmail({
        email: formData.email,
        password: formData.password
      });

      if (error) {
        toast.error(error.message);
      } else if (user) {
        toast.success("Signed in successfully");
        window.location.href = "/";
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setEmailLoading(false);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      setGoogleLoading(true);
      await new Promise(r => setTimeout(r, 50));

      const { data, error } = await signInWithGoogle();

      if (error) {
        toast.error(error.message);
        setGoogleLoading(false);
        return;
      }

      if (data?.url) {
        window.location.href = data.url;
      }
    } catch {
      toast.error("Something went wrong");
      setGoogleLoading(false);
    }
  };

  const handleGitHubSignin = async () => {
    try {
      setGithubLoading(true);
      await new Promise(r => setTimeout(r, 50));

      const { data, error } = await signInWithGitHub();

      if (error) {
        toast.error(error.message);
        setGithubLoading(false);
        return;
      }

      if (data?.url) {
        window.location.href = data.url;
      }
    } catch {
      toast.error("Something went wrong");
      setGithubLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#090E1A] flex items-center justify-center px-4">
      <div className="bg-[#2B303B] text-white w-full max-w-md rounded-2xl shadow-xl p-8 space-y-6 mt-[100px] mb-[100px]">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/logo1.png"
              alt="Logo"
              width={70}
              height={70}
              className="rounded-lg"
            />
          </div>
          <h2 className="text-[28px] font-bold">Welcome Back</h2>
          <p className="text-[15px] text-[#94A3B8] mt-1">
            Sign in to your OSCG account
          </p>
        </div>

        <div className="space-y-3">
          <Button
            onClick={handleGitHubSignin}
            disabled={githubLoading || googleLoading || emailLoading}
            variant="outline"
            className="w-full bg-[#101318] border border-[#272C35] text-[#FCFBF8] hover:text-white hover:bg-[#1a1f25] flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
          >
            <Github size={20} />
            {githubLoading ? "Loading..." : "Sign in with GitHub"}
          </Button>

          <Button
            onClick={handleGoogleSignin}
            disabled={googleLoading || githubLoading || emailLoading}
            className="w-full bg-white text-[#111827] hover:bg-[#e5e7eb] flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
          >
           <svg xmlns="http://www.w3.org/2000/svg" className="scale-125" viewBox="0 0 48 48" > <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" ></path> <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" ></path> <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" ></path> <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" ></path> </svg>
            {googleLoading ? "Loading..." : "Sign in with Google"}
          </Button>
        </div>

        <div className="flex items-center justify-center text-gray-500 text-sm">
          <span className="w-1/5 border-b border-gray-600"></span>
          <span className="mx-2 text-[13.5px] text-[#94A3B8]">
            OR SIGN IN WITH EMAIL
          </span>
          <span className="w-1/5 border-b border-gray-600"></span>
        </div>

        <form onSubmit={handleEmailSignin} className="space-y-4">
          <div>
            <label className="text-[14px]">Email address</label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="you@example.com"
                className="w-full pl-10 pr-3 py-2 rounded-lg bg-[#101318] border border-gray-700 focus:border-[#11D493]"
              />
            </div>
          </div>

          <div>
            <label className="text-[14px]">Password</label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                placeholder="Enter your password"
                className="w-full pl-10 pr-10 py-2 rounded-lg bg-[#101318] border border-gray-700 focus:border-[#11D493]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="  cursor-pointer absolute right-3 top-3 text-gray-400 hover:text-[#11D493]"
              >
                {showPassword ? <EyeOff size={18}/> : <Eye size={18}  />}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            disabled={emailLoading || googleLoading || githubLoading}
            className="w-full py-2 bg-[#11D493] text-[#101318] rounded-lg font-semibold text-[14px] hover:bg-[#0ec28a] disabled:opacity-50 cursor-pointer"
          >
            {emailLoading ? "Signing In..." : "Sign In"}
          </Button>
        </form>

        <p className="text-center text-[15px] text-gray-400">
          Don&apos;t have an account?{" "}
          <Button asChild variant="link" className="text-[#11D493] font-semibold p-0 hover:underline">
            <Link href="/sign-up">Sign up</Link>
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Signin;
