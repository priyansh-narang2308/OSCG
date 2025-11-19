import React from "react";

export default function Come() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#030F0F] via-[#071018] to-[#030F0F] flex items-center justify-center p-4">
     <div 
        className="absolute inset-0 pointer-events-none w-[400px] h-[400px] mx-auto my-auto max-w-full max-h-full"
        style={{
          background: `radial-gradient(circle at center, #00D4D0 0%, #00D4D000 50%, transparent 70%)`,
          filter: 'blur(20px)',
          
        }}
      />

      <div className="flex flex-col items-center justify-center gap-6 
       max-w-md w-full">

        {/* Logo + Dot */}
        <div className="flex flex-row items-center gap-2">
          <div className="w-[10px] h-[10px] bg-[#00D4D0] rounded-full shadow-[0_0_20px_#00D4D080]"></div>
          <p className="text-[#FAFAFA] text-sm tracking-widest font-medium">
            OSCG
          </p>
        </div>

        {/* Title - Gradient Text */}
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#FAFAFA] to-[#00D4D0] bg-clip-text text-transparent text-center">
          Coming Soon
        </h1>

        {/* Subtitle */}
        <p className="text-[#9DB5B8] text-sm font-[400] text-center">
          This page is currently under construction.
        </p>

        {/* Divider */}
        <div className="w-[600px] max-w-full h-[1px] mt-8 bg-gradient-to-r from-transparent via-[#FFFFFF14] to-transparent"></div>

        {/* Footer */}
        <p className="text-[#9DB5B8] text-xs mt-2 font-[400]">
          © 2025 OSCG Designs. All rights reserved.
        </p>
      </div>
    </div>
  );
}