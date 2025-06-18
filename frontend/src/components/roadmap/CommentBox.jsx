import { MessageCircle } from "lucide-react";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import { useCreateCommentMutation } from "../../features/api/baseAPI";

const CommentBox = ({ data: comments, roadmapID, refetch }) => {
  const [createComment] = useCreateCommentMutation();
  const handleCreateComment = async (data) => {
    try {
      const response = await createComment(data).unwrap();
      if (response) {
        refetch();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 ">
      <div className="pb-5">
        <div className="flex items-center gap-2 text-lg text-white">
          <MessageCircle className="w-5 h-5 " />
          <span> Comments ({comments.length})</span>
        </div>
      </div>

      <div className="space-y-6">
        <CommentForm
          type="Create"
          roadmapID={roadmapID}
          queryFunction={handleCreateComment}
          placeholder="Share your thoughts......"
        />
        <div className="space-y-4 w-full">
          {comments.map((comment) => (
            <CommentItem
              key={comment._id}
              comment={comment}
              roadmapID={roadmapID}
              refetch={refetch}
              depth={0}
            />
          ))}

          {comments.length === 0 && (
            <div className="text-center py-8 text-gray-100">
              No comments yet. Be the first to share your thoughts!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default CommentBox;
