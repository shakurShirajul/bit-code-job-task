import { Comment } from "../models/Comment.js";
export const deleteCommentRecursively = async (commentID) => {
  let deletedCount = 0;

  const comment = await Comment.findOne({ _id: commentID });
  if (!comment) return deletedCount;

  // Recursively delete all replies
  for (const replyID of comment.replies) {
    deletedCount += await deleteCommentRecursively(replyID);
  }

  // Delete the comment itself
  const result = await Comment.deleteOne({ _id: commentID });
  if (result.deletedCount > 0) deletedCount += 1;

  return deletedCount;
};
