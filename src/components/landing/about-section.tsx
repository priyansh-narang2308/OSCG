import { BookOpen, Lightbulb, Users } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="py-20 bg-[#090E1A] text-white relative">
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
        {" "}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            About <span className="text-[#4AD0CD]">Us</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-white/80">
            Open Source Connect Global is a worldwide movement celebrating the
            power of open collaboration. We bring together developers, creators,
            and innovators to shape the future of technology through shared
            knowledge and collective innovation.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="max-w-6xl w-full px-4">
            <div className="mb-16 rounded-lg border-l-4 border-[#3BD1C8] bg-[#161B27] p-8">
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
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 grid gap-6 md:grid-cols-3">
            <div className="flex justify-center">
              <div className="rounded-lg border border-white/40 bg-[#161B26] p-6 max-w-sm w-full">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#2FD2C1]">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Community</h3>
                <p className="text-md text-white/80">
                  Building bridges between developers, innovators, and open
                  source enthusiasts worldwide
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="rounded-lg border border-white/40 bg-[#161B26] p-6 max-w-sm w-full">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#2FD2C1]">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Learning</h3>
                <p className="text-md text-white/80">
                  Empowering individuals through knowledge sharing, workshops,
                  and collaborative experiences
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="rounded-lg border border-white/40 bg-[#161B26] p-6 max-w-sm w-full">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#2FD2C1]">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Innovation</h3>
                <p className="text-md text-white/80">
                  Driving technological advancement through collaborative
                  problem-solving and creative solutions
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-8 text-center md:grid-cols-4">
          <div>
            <div className="mb-2 text-4xl font-bold text-[#6ACFDD]">
              10,000+
            </div>
            <div className="text-sm text-muted-foreground">Participants</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold text-[#6ACFDD]">60+</div>
            <div className="text-sm text-muted-foreground">
              Open Source Projects
            </div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold text-[#6ACFDD]">50+</div>
            <div className="text-sm text-muted-foreground">Expert Speakers</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold text-[#6ACFDD]">100+</div>
            <div className="text-sm text-muted-foreground">
              Community Partners
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
