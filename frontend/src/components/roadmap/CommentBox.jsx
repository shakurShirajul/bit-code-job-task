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
        <div className="space-y-4"></div>
      </div>
    </div>
  );
};
export default CommentBox;
