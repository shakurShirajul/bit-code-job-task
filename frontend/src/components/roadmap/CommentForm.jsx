import { Send, X } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import profilePlaceholder from "../../assets/icon/profile.svg";

const CommentForm = ({
  type,
  roadmapID,
  queryFunction,
  optionFunction,
  setOptionFunction,
  placeholder = "",
  initialState = "",
}) => {
  const user = useSelector((state) => state.auth.user);
  const [textareaContent, setTextareaContent] = useState(initialState);
  return (
    <div className="flex gap-2">
      {(type === "Create" || type === "Reply") && (
        <div>
          <img
            src={user.image ? user?.image : profilePlaceholder}
            className="h-11 w-11 rounded-full object-cover"
            alt={user?.name}
          />
        </div>
      )}
      <div className="flex-1 space-y-1">
        <div>
          <textarea
            value={textareaContent}
            onChange={(e) => setTextareaContent(e.target.value)}
            placeholder={placeholder}
            className="w-full  min-h-[100px] bg-white/5 backdrop-blur-md border border-white/20 rounded-xl text-white p-3 focus:outline-none focus:ring-2 focus:ring-white/30 placeholder:text-white/40 resize-none"
            maxLength={300}
          />
          <div className="text-xs text-white ml-2 mt-0.5">
            {textareaContent.length}/300 characters
          </div>
        </div>
        <div className="flex justify-end gap-2">
          {(type === "Edit" || type === "Reply") && (
            <button
              onClick={async () => {
                setOptionFunction(!optionFunction);
              }}
              type="submit"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-200 shadow-sm disabled:cursor-not-allowed disabled:hover:bg-white/10"
            >
              <X className="w-4 h-4 mr-1" /> Cancel
            </button>
          )}
          <button
            disabled={!textareaContent || textareaContent.trim() === ""}
            className="button-primary"
            onClick={() => {
              queryFunction({
                content: textareaContent,
                authorID: user._id,
                roadmapID: roadmapID,
              });
              setTextareaContent("");
            }}
          >
            <Send />
            {type === "Edit" ? "Update" : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default CommentForm;
