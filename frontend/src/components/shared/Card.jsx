import { Calendar, ChevronUp, MessageCircle } from "lucide-react";
import Badge from "./Badge";

const Card = ({ data }) => {
  return (
    <div
      className="cursor-pointer bg-white p-5 rounded-2xl hover:shadow-md transition-shadow duration-200"
      // onClick={onClick}
    >
      <div className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2 line-clamp-2">
              {data.title}
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <Badge status="In Progress" />
              <Badge status="Collaboration" />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-0">
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {data.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {data.createdAt}
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4" />
              {}
            </div>
          </div>

          <button
            //   variant={hasVoted ? "default" : "outline"}
            size="sm"
            //   onClick={handleVote}
            //   disabled={hasVoted}
            className="flex items-center gap-1"
          >
            <ChevronUp className="w-4 h-4" />
            10
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
