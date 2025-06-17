import { Send } from "lucide-react";

const CommentForm = ({ loggedUser }) => {
  return (
    <div className="flex gap-2">
      <div>
        <img
          src={loggedUser.image}
          className="h-11 w-11 rounded-full object-cover"
        />
      </div>
      <div className="flex-1 space-y-1">
        <textarea
          //   value={content}
          //   onChange={(e) => setContent(e.target.value)}
          //   placeholder={placeholder}
          className="w-full  min-h-[100px] bg-white/5 backdrop-blur-md border border-white/20 rounded-xl text-white p-3 focus:outline-none focus:ring-2 focus:ring-white/30 placeholder:text-white/40 resize-none"
          maxLength={300}
        />
        <div className="flex justify-end">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-200 shadow-sm">
            <Send /> Send
          </button>
        </div>
      </div>
    </div>
  );
};
export default CommentForm;
