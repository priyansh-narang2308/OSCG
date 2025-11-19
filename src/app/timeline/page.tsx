import { EventCard } from "./_components/event-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EventTimeline = () => {
  const events = [
    {
      status: "upcoming" as const,
      title: "Spring Hackathon",
      description:
        "48-hour coding marathon focused on sustainable technology solutions",
      date: "March 15, 2024",
      location: "Virtual",
      attendees: "500+",
    },
    {
      status: "upcoming" as const,
      title: "Women in Tech Summit",
      description: "Celebrating and empowering women leaders in technology",
      date: "February 28, 2024",
      location: "San Francisco, CA",
      attendees: "300+",
    },
    {
      title: "Code for Good Workshop",
      description: "Building tech solutions for non-profit organizations",
      date: "February 14, 2024",
      location: "Virtual",
      attendees: "200+",
    },
    {
      title: "AI/ML Conference",
      description:
        "Exploring the latest advances in artificial intelligence and machine learning",
      date: "January 20, 2024",
      location: "New York, NY",
      attendees: "800+",
    },
    {
      title: "Year End Meetup",
      description: "Celebrating achievements and planning for the future",
      date: "December 10, 2023",
      location: "Multiple Cities",
      attendees: "1000+",
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#090E1A" }}>
      {/* Header Section */}
      <div className="container mx-auto px-6 py-8 pt-24">
      

        {/* Main Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-white">Event </span>
            <span style={{ color: "#11D493" }}>Timeline</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mt-4">
            Join us at upcoming events and workshops designed to inspire and connect developers.
          </p>
        </div>

        {/* Event Timeline Section */}
        <div className="relative max-w-4xl mx-auto mb-16">
          {events.map((event, index) => (
            <EventCard
              key={index}
              {...event}
              isFirst={index === 0}
              isLast={index === events.length - 1}
              index={index}
              totalEvents={events.length}
            />
          ))}
        </div>

        {/* Mid-Page Stay Updated Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="rounded-lg p-8" style={{ backgroundColor: "#181D28" }}>
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter to receive updates about upcoming events
            </p>
            <div className="flex gap-0">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 rounded-l-lg rounded-r-none border-none bg-[#1A1F2E] text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[#11D493] focus:ring-offset-0"
                style={{ backgroundColor: "#1A1F2E" }}
              />
              <Button
                className="h-12 px-8 rounded-r-lg rounded-l-none font-semibold text-white"
                style={{ backgroundColor: "#11D493" }}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTimeline;
