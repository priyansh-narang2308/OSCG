import { EventCard } from "./_components/event-card";

const EventTimeline = () => {
  const events = [
    {
      status: "upcoming" as const,
      title: "Spring Hackathon",
      description: "48-hour coding marathon focused on sustainable technology solutions",
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
      description: "Exploring the latest advances in artificial intelligence and machine learning",
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
    <div className="min-h-screen bg-[#090E1A]">
      <div className="container mx-auto px-4 sm:px-6 py-8 pt-24">
        <div className="text-center my-12 mb-16">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Event <span className="text-[#4FD1D0]">Timeline</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-4 px-4">
            Join us at upcoming events and workshops designed to inspire and connect developers.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="space-y-8">
            {events.map((event, index) => (
              <EventCard
                key={index}
                {...event}
                index={index}
                totalEvents={events.length}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTimeline;