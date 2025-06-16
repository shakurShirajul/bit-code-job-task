import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <div className="">
      <div className="relative flex-1 bg-white rounded-lg py-1.5">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          placeholder="Search roadmap items..."
          className="pl-10 w-full outline-0 text-sm"
          type="text"
        />
      </div>
    </div>
  );
};
export default SearchInput;
