import { Calendar, ChevronUp, MessageCircle } from "lucide-react";
import Badge from "./Badge";
import { useNavigate } from "react-router";
import { useUpvotesRoadmapMutation } from "../../features/api/baseAPI";
import { useSelector } from "react-redux";

const Card = ({ data, refetch }) => {
  const [toggleUpvote] = useUpvotesRoadmapMutation();
  const user = useSelector((item) => item.auth.user);
  const handleVote = async (event) => {
    event.stopPropagation();
    const response = await toggleUpvote({
      authorID: user._id,
      roadmapID: data._id,
    });
    if (response) {
      refetch();
    }
  };

  const navigate = useNavigate();

  const isUpvoted = data.upvotes.includes(user._id);

  return (
    <div
      className="cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 p-5  rounded-2xl hover:scale-105 transition duration-200"
      onClick={() => {
        console.log("Shakur");
        navigate(`/roadmap/details/${data._id}`);
      }}
    >
      <div className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-white">
              {data.title}
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <Badge status={data.status} />
              <Badge status={data.category} />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-0">
        <p className="text-gray-100 text-sm mb-4 line-clamp-3">
          {data.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-100">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(data.createdAt).toLocaleDateString("en-GB")}
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4" />
              {data.comments.length}
            </div>
          </div>

          <button
            size="sm"
            onClick={handleVote}
            className={`${
              isUpvoted && "bg-white/20"
            } flex items-center cursor-pointer border border-white/20 gap-2 hover:bg-white/20 text-white rounded-xl px-2 py-1`}
          >
            <ChevronUp className="w-4 h-4 " />
            {data.upvotes.length}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
