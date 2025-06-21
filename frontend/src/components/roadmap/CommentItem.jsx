import { Edit, MoreHorizontal, Reply, Send, Trash2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CommentForm from "./CommentForm";
import {
  useDeleteCommentMutation,
  useEditCommentMutation,
  useReplyCommentMutation,
} from "../../features/api/baseAPI";

const CommentItem = ({ comment, roadmapID, refetch, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const optionRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (optionRef.current && !optionRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Redux & RTK Query
  const [editComment] = useEditCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();
  const [replyComment] = useReplyCommentMutation();

  const user = useSelector((state) => state.auth.user);

  const isAuthor = user?._id === comment?.authorID?._id;
  const canReply = depth < 2;

  const handleCommentEdit = async (data) => {
    try {
      const response = await editComment({
        ...data,
        commentID: comment._id,
      }).unwrap();
      if (response) {
        refetch();
        setIsEditing(!isEditing);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCommentDelete = async () => {
    try {
      const response = await deleteComment({
        commentID: comment._id,
        roadmapID: roadmapID,
        authorID: user._id,
      });
      if (response) {
        refetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCommentReply = async (data) => {
    try {
      const response = await replyComment({ ...data, commentID: comment._id });
      if (response) {
        setIsReplying(false);
        refetch();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-full p-3 rounded-xl bg-white/5 backdrop-blur-md">
      <div className="flex gap-2">
        <img
          src={comment?.authorID?.image || "/placeholder.svg"}
          className="h-11 w-11 rounded-full object-cover"
          alt="User"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start mb-1">
            <div className="space-x-2">
              <span className="font-medium text-white text-sm">
                {comment?.authorID?.name || "Unknown"}
              </span>
              <span className="text-xs text-gray-300">
                {new Date(comment?.createdAt).toLocaleDateString("en-GB")}
              </span>
            </div>
            {isAuthor && (
              <div className="relative">
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <MoreHorizontal className="w-4 h-4 text-white" />
                </div>

                {isOpen && (
                  <div className="absolute right-0 mt-2  bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg z-10">
                    <button
                      onClick={() => {
                        setIsEditing(!isEditing);
                        setIsReplying(false);
                        setIsOpen(false);
                      }}
                      className="px-4 py-2 w-full hover:bg-white/20 flex items-center cursor-pointer transition-colors rounded-t-lg text-white"
                      ref={optionRef}
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        handleCommentDelete();
                        setIsOpen(false);
                      }}
                      className="px-4 py-2 w-full hover:bg-white/20 flex items-center cursor-pointer transition-colors rounded-b-lg text-red-700"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          {isEditing ? (
            <div>
              <CommentForm
                type="Edit"
                roadmapID={roadmapID}
                queryFunction={handleCommentEdit}
                optionFunction={isEditing}
                setOptionFunction={setIsEditing}
                initialState={comment.content}
              />
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-100 mb-2 whitespace-pre-wrap">
                {comment.content}
              </p>

              <div className="flex items-center gap-2">
                {canReply && (
                  <button
                    onClick={() => setIsReplying(!isReplying)}
                    className="h-7 px-2 text-xs flex items-center text-gray-300"
                  >
                    <Reply className="w-3 h-3 mr-1" />
                    Reply
                  </button>
                )}

                {comment.replies && comment.replies.length > 0 && (
                  <button
                    onClick={() => setShowReplies(!showReplies)}
                    className="h-7 px-2 text-xs text-gray-300"
                  >
                    {showReplies ? "Hide" : "Show"} {comment.replies.length}
                    {comment.replies.length === 1 ? "reply" : "replies"}
                  </button>
                )}
              </div>
            </>
          )}
          {isReplying && (
            <CommentForm
              type="Reply"
              roadmapID={roadmapID}
              queryFunction={handleCommentReply}
              optionFunction={isReplying}
              setOptionFunction={setIsReplying}
              placeholder={`Reply to ${comment.authorID.name}`}
            />
          )}
        </div>
      </div>
      {showReplies && comment.replies && comment.replies.length > 0 && (
        <div className="space-y-3 ml-12 mt-1">
          {comment.replies.map((reply) => (
            <CommentItem
              key={reply._id}
              comment={reply}
              roadmapID={roadmapID}
              refetch={refetch}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default CommentItem;
