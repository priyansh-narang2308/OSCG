import { ArrowRight, Github } from "lucide-react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/landingbg.jpeg')",
        }}
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="container relative mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/40 bg-linear-to-r from-white/20 via-white/10 to-white/20 px-5 py-2.5 text-sm text-white backdrop-blur-md font-medium tracking-wide shadow-[0_0_15px_rgba(255,255,255,0.15),0_0_30px_rgba(184,255,249,0.2)] animate-[pulseGlow_2.5s_ease-in-out_infinite] [@keyframes_pulseGlow]:{0%,100%{box-shadow:0_0_15px_rgba(255,255,255,0.15),0_0_30px_rgba(184,255,249,0.2);transform:scale(1);}50%{box-shadow:0_0_25px_rgba(255,255,255,0.35),0_0_50px_rgba(184,255,249,0.4);transform:scale(1.02);}}">
            <Github className="h-4 w-4 text-[#B8FFF9] drop-shadow-[0_0_6px_#B8FFF9]" />
            Global Edition • 2026
          </div>

          <h1 className="mb-6 max-w-4xl text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Connecting the World Through{" "}
            <span className="text-[#57D2D7]">Open Source</span>
          </h1>

          <p className="mb-12 max-w-2xl text-lg text-gray-300 md:text-xl">
            Join thousands of developers, innovators, and open source
            enthusiasts celebrating global collaboration and technological
            excellence
          </p>

          <div className="mb-20 flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#00D6B2] hover:bg-[#00d6b2d9] text-black cursor-pointer border-0"
            >
              Register Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer border-green-400 bg-transparent hover:bg-transparent/40 text-white hover:text-white/90"
            >
              Explore Projects
            </Button>
          </div>

          <div className="grid w-full max-w-4xl grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="flex flex-col items-center">
              <div className="mb-2 text-3xl font-bold text-[#57D2D7] md:text-4xl">
                25,000+
              </div>
              <div className="text-sm text-gray-300">Participants</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 text-3xl font-bold text-[#89CFEB] md:text-4xl">
                60+
              </div>
              <div className="text-sm text-gray-300">Speakers</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 text-3xl font-bold text-[#57D2D7] md:text-4xl">
                100+
              </div>
              <div className="text-sm text-gray-300">Projects</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 text-3xl font-bold text-[#89CFEB] md:text-4xl">
                Global
              </div>
              <div className="text-sm text-gray-300">Community</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
