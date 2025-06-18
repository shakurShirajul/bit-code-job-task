import { Calendar, ChevronUp } from "lucide-react";
import { useParams } from "react-router";
import Badge from "../../components/shared/Badge";
import { useGetRoadmapByIDQuery } from "../../features/api/baseAPI";
import CommentBox from "../../components/roadmap/CommentBox";

const RoadmapDetails = () => {
  const { id } = useParams();
  const { data, isLoading, refetch } = useGetRoadmapByIDQuery(id);
  if (isLoading) {
    return <div>Loading......</div>;
  }
  return (
    <div className="space-y-5">
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

            <button className="flex items-center cursor-pointer border border-white/20 gap-2 hover:bg-white/20 text-white rounded-xl px-2 py-1">
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
