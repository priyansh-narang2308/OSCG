import { FaUsers, FaBookOpen, FaRegLightbulb } from "react-icons/fa";

export default function AboutUs() {
  const icons = [
    <FaUsers key="users" className="text-white text-2xl" />,
    <FaBookOpen key="book" className="text-white text-2xl" />,
    <FaRegLightbulb key="bulb" className="text-white text-2xl" />,
  ];

  return (
    <div className="min-h-screen bg-[#090E1A] text-white px-4 sm:px-6 py-16">
      {/* ✅ Heading */}
      <h1 className="text-[32px] sm:text-[48px] font-bold text-center mb-4 mt-[50px]">
        About{" "}
        <span className="bg-gradient-to-r from-[#00D4AA] to-[#87CEEB] bg-clip-text text-transparent">
          Us
        </span>
      </h1>

      <p className="text-center text-[#94A3B8] max-w-3xl mx-auto mb-16 text-[16px] sm:text-[20px] font-normal px-2">
        We&apos;re building a global community that connects developers through
        open source collaboration
      </p>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-5 mb-20 justify-center items-center">
        <div className="bg-[#0F131A] p-[30px] rounded-2xl shadow-md border border-[#1F242E] w-full max-w-[700px] h-auto">
          <h2 className="text-[22px] sm:text-[24px] font-bold text-[#00D4AA] mb-2">
            Our Mission
          </h2>
          <p className="text-[#F8FAFCCC] text-[15px] sm:text-[16px] font-normal">
            To empower developers worldwide by fostering an inclusive open
            source ecosystem where innovation thrives, knowledge is shared
            freely, and collaboration knows no boundaries. We believe in the
            power of community-driven development to solve real-world problems.
          </p>
        </div>

        <div className="bg-[#0F131A] p-[30px] rounded-2xl shadow-md border border-[#1F242E] w-full max-w-[700px] h-auto">
          <h2 className="text-[22px] sm:text-[24px] font-bold text-[#00D4AA] mb-2">
            Our Vision
          </h2>
          <p className="text-[#F8FAFCCC] text-[15px] sm:text-[16px] font-normal">
            To become the world&apos;s leading platform for open source
            collaboration, connecting millions of developers across continents.
            We envision a future where every developer, regardless of background
            or location, has the opportunity to contribute to meaningful
            projects.
          </p>
        </div>
      </div>

      <h2 className="text-[26px] sm:text-[30px] font-[700] text-center mb-10">
        What We{" "}
        <span className="bg-gradient-to-r from-[#00D4AA] to-[#87CEEB] bg-clip-text text-transparent">
          Believe
        </span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center mb-20 px-4">
        {[
          "Community First",
          "Learning Together",
          "Innovation Through Collaboration",
        ].map((title, index) => (
          <div
            key={index}
            className="bg-[#0F131A] p-[30px] w-full max-w-[450px] rounded-2xl border border-[#1F242E] shadow-lg mx-auto"
          >
            <div className="w-[48px] h-[48px] mb-4 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#00D4AA] to-[#87CEEB]">
              {icons[index]}
            </div>
            <h3 className="text-[18px] sm:text-[20px] font-[700] text-[#F8FAFC] mb-2">
              {title}
            </h3>
            <p className="text-[#F8FAFCB2] font-[400] text-[15px] sm:text-[16px]">
              {index === 0 &&
                "We prioritize building strong, supportive communities where every voice matters and contributions are celebrated."}
              {index === 1 &&
                "Knowledge sharing is at our core. We create opportunities for developers to learn from each other and grow together."}
              {index === 2 &&
                "The best solutions emerge when diverse minds work together. We facilitate meaningful collaborations across the globe."}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-[26px] sm:text-[30px] font-[700] text-center mb-10">
        Our{" "}
        <span className="bg-gradient-to-r from-[#00D4AA] to-[#87CEEB] bg-clip-text text-transparent">
          Impact
        </span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center px-4">
        {["25,000+", "60+", "100+", "50+"].map((count, index) => (
          <div key={index} className="p-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-teal-400">
              {count}
            </h3>
            <p className="text-gray-300 mt-2 text-[14px] sm:text-[16px]">
              {index === 0 && "Community Members"}
              {index === 1 && "Countries"}
              {index === 2 && "Projects"}
              {index === 3 && "Events Hosted"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
