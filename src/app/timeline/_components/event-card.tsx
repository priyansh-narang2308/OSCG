import { MapPin, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  status?: "upcoming" | "past";
  title: string;
  description: string;
  date: string;
  location: string;
  attendees: string;
  isFirst?: boolean;
  isLast?: boolean;
  index: number;
  totalEvents: number;
}

export const EventCard = ({
  status,
  title,
  description,
  date,
  location,
  attendees,
  isFirst,
  isLast,
  index,
  totalEvents,
}: EventCardProps) => {
  return (
    <div className="relative flex items-start gap-8 mb-8">
      {/* Timeline Line */}
      {!isLast && (
        <div
          className="absolute left-8 top-16 w-0.5"
          style={{
            height: "calc(100% + 2rem)",
            backgroundColor: "#11D493",
          }}
        />
      )}

      {/* Timeline Dot */}
      <div className="relative z-10 flex-shrink-0">
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: "#11D493" }}
        />
      </div>

      {/* Event Card */}
      <div className="flex-1">
        <div
          className="rounded-lg p-6 border border-gray-800"
          style={{ backgroundColor: "#181D28" }}
        >
          <div className="flex items-start justify-between mb-4">
            {status === "upcoming" ? (
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white uppercase tracking-wide"
                style={{ backgroundColor: "#11D493" }}
              >
                {status}
              </span>
            ) : (
              <div />
            )}
            <div className="flex items-center gap-2 text-white text-sm">
              <Calendar className="w-4 h-4" style={{ color: "#11D493" }} />
              <span>{date}</span>
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {title}
          </h3>
          <p className="text-gray-400 mb-6 text-base">{description}</p>

          <div className="flex items-center gap-6 mb-6 flex-wrap">
            <div className="flex items-center gap-2 text-white text-sm">
              <MapPin className="w-4 h-4" style={{ color: "#11D493" }} />
              <span>{location}</span>
            </div>

            <div className="flex items-center gap-2 text-white text-sm">
              <Users className="w-4 h-4" style={{ color: "#11D493" }} />
              <span>{attendees}</span>
            </div>
          </div>

          {status === "upcoming" && (
            <Button
              className="font-semibold text-white rounded-lg"
              style={{ backgroundColor: "#11D493" }}
            >
              Register Now
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
