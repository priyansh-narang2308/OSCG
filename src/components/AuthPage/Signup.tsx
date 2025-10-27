import { FaGithub, FaGoogle } from "react-icons/fa";



const Signup = () => {


  return (
    <div className="min-h-screen bg-[#090E1A] flex items-center justify-center px-4 ">
      <div className="bg-[#2B303B] text-white w-full max-w-md rounded-2xl shadow-xl p-8 space-y-6 mt-[100px] mb-[100px]">
      
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img
              src="/logo.png"
              alt="Logo"
              width={34}
              height={34}
              className="rounded-lg cursor-pointer"
            />

          </div>
          <h2 className="text-[30px] font-[700]">Join OSCG</h2>
          <p className="text-[16px] font-[400] text-[#94A3B8] mt-1">Create your account to get started</p>
        </div>

        
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 bg-[#101318] py-2 rounded-lg text-[#FCFBF8]  text-[14px] font-[600]  border border-[#272C35]">
            <FaGithub size={16} />  Sign up with GitHub
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-white text-black text-[#111827] text-[14px] font-[600] py-2 rounded-lg">
           <FaGoogle size={16} /> Sign up with Google
          </button>
        </div>

   
        <div className="flex items-center justify-center text-gray-500 text-sm">
          <span className="w-1/5 border-b border-gray-600"></span>
          <span className="mx-2 text-[13.9px] font-[400] text-[#94A3B8]">OR SIGN UP WITH EMAIL</span>
          <span className="w-1/5 border-b border-gray-600"></span>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="text-[14px] text-[#FCFBF8]">Full name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full mt-1 px-3 py-2 rounded-lg bg-[#101318] text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="text-[14px] text-[#FCFBF8]">Email address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-3 py-2 rounded-lg bg-[#101318] text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="text-[14px] text-[#FCFBF8]">Password (min. 6 characters)</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full mt-1 px-3 py-2 rounded-lg bg-[#101318] text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="text-[14px] text-[#FCFBF8]">Confirm password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full mt-1 px-3 py-2 rounded-lg bg-[#101318] text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#11D493] rounded-lg font-[600] text-[14px] text-[#101318]"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-[16px] font-[400] text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-[#11D493] hover:underline text-[16px] font-[600]">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
