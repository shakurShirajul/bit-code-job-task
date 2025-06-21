import { ArrowLeft, Calendar, ChevronUp } from "lucide-react";
import { useNavigate, useParams } from "react-router";
import Badge from "../../components/shared/Badge";
import {
  useGetRoadmapByIDQuery,
  useUpvotesRoadmapMutation,
} from "../../features/api/baseAPI";
import CommentBox from "../../components/roadmap/CommentBox";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const RoadmapDetails = () => {
  const { id } = useParams();
  const { data, isLoading, refetch } = useGetRoadmapByIDQuery(id);
  const user = useSelector((item) => item.auth.user);
  const [toggleUpvote] = useUpvotesRoadmapMutation();
  const navigate = useNavigate();
  const handleUpvotes = async () => {
    const response = await toggleUpvote({
      authorID: user._id,
      roadmapID: data._id,
    });
    if (response) {
      refetch();
    }
  };
  useEffect(() => {
    refetch();
  }, [refetch]);
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce animation-delay-400"></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce animation-delay-600"></div>
          </div>
        </span>
      </div>
    );
  }
  const isUpvoted = data.upvotes.includes(user._id);
  return (
    <div className="min-h-screen space-y-5 px-5 pb-5 md:px-0">
      <div>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
          <span className="text-white text-sm">Back</span>
        </button>
      </div>
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5">
        <div>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-2xl text-white font-bold mb-4">
                {data.title}
              </h1>
              <div className="flex items-center gap-3 mb-4">
                <Badge status={data.status} />
                <Badge status={data.category} />
              </div>
              <div className="flex items-center gap-4 text-sm text-white">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-white" />
                  {new Date(data.createdAt).toLocaleDateString("en-GB")}
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                handleUpvotes();
              }}
              className={`${
                isUpvoted && "bg-white/20"
              } flex items-center cursor-pointer border border-white/20 gap-2 hover:bg-white/20 text-white rounded-xl px-2 py-1`}
            >
              <ChevronUp className="w-4 h-4" />
              {data.upvotes.length}
            </button>
          </div>
        </div>

        <div className="py-2">
          <p className="text-white leading-relaxed text-xl">
            {data.description}
          </p>
        </div>
      </div>
      <div>
        <CommentBox data={data.comments} refetch={refetch} roadmapID={id} />
      </div>
    </div>
  );
};
export default RoadmapDetails;
