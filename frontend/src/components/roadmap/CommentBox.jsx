import { MessageCircle } from "lucide-react";
import CommentForm from "./CommentForm";
import { useSelector } from "react-redux";

const CommentBox = ({ data }) => {
  const loggedUser = useSelector((state) => state.auth.user);
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 ">
      <div className="pb-5">
        <div className="flex items-center gap-2 text-lg text-white">
          <MessageCircle className="w-5 h-5 " />
          <span> Comments ({data.length})</span>
        </div>
      </div>

      <div className="space-y-6">
        <CommentForm loggedUser={loggedUser} />

        <div className="space-y-4">
          {/* {comments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              user={user}
              onReply={(content) => addComment(content, comment.id)}
              onEdit={(content) => updateComment(comment.id, content)}
              onDelete={() => deleteComment(comment.id)}
              depth={0}
            />
          ))} */}

          {/* {comments.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No comments yet. Be the first to share your thoughts!
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};
export default CommentBox;
