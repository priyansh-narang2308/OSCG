import Image from "next/image";

const SponsersSection = () => {
  return (
    <section className="py-1 bg-[#090E1A]">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl text-white font-bold md:text-5xl">
            Our <span className="text-[#4FD1D0]">Sponsors</span>
          </h2>
          <p className="mx-auto max-w-2xl text-white/80">
            Supported by industry leaders who believe in the power of open
            source innovation
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-linear-to-r from-white to-transparent"></div>
            <h3 className="mx-3 text-white text-lg font-semibold">
              Platinum Sponsors
            </h3>
            <div className="h-px w-12 bg-linear-to-l from-white to-transparent"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-[#131C29]">
              <Image
                src={"/nex.png"}
                alt="google logo"
                width={280}
                height={280}
              />
            </div>
            <div className="flex h-32 items-center justify-center rounded-lg border border-white/10 bg-[#131C29]">
             
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-linear-to-r from-yellow-400 to-transparent"></div>
            <h3 className="mx-3 text-yellow-400 text-lg font-semibold">
              Gold Sponsors
            </h3>
            <div className="h-px w-12 bg-linear-to-l from-yellow-400 to-transparent"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            <div className="flex h-24 items-center justify-center rounded-lg border border-white/10 bg-[#131C29]">
              
            </div>
            <div className="flex h-24 items-center justify-center rounded-lg border border-white/10 bg-[#131C29]">
             
            </div>
            <div className="flex h-24 items-center justify-center rounded-lg border border-white/10 bg-[#131C29]">
            
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl text-white font-bold">
              Hiring <span className="text-[#4FD1D0]">Partners</span>
            </h2>
            <p className="mx-auto max-w-2xl text-white/80">
              Connect with top companies actively seeking talented open source
              developers
            </p>
          </div>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 max-w-5xl mx-auto">
            {["Stripe", "Vercel", "Shopify", "Meta", "Salesforce", "Adobe"].map(
              (company, index) => (
                <div
                  key={index}
                  className="flex h-20 items-center justify-center rounded-lg border border-white/10 bg-[#131C29]"
                >
                
                </div>
              )
            )}
          </div>
        </div>

        <div>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-white text-4xl font-bold">
              Community <span className="text-[#4FD1D0]">Partners</span>
            </h2>
            <p className="mx-auto max-w-2xl text-white/80">
              Collaborating with open source foundations and communities
              worldwide
            </p>
          </div>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto">
            {[
              "Linux Foundation",
              "ASF",
              "Cloud Native Foundation",
              "Mozilla",
              "Python Foundation",
              "OpenJS Foundation",
              "Eclipse Foundation",
              "Free Software Foundation",
            ].map((partner, index) => (
              <div
                key={index}
                className="flex h-24 items-center justify-center rounded-lg border border-white/10 bg-[#131C29]"
              >
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsersSection;
