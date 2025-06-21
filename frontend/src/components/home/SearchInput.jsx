import { Search } from "lucide-react";

const SearchInput = ({ handleSearchInput }) => {
  return (
    <div className="relative flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg py-1.5 shadow-md">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
      <input
        onChange={(e) => handleSearchInput(e.target.value)}
        placeholder="Search roadmap items..."
        className="pl-10 w-full outline-0 text-sm text-white placeholder-white/50 bg-transparent"
        type="text"
      />
    </div>
  );
};
export default SearchInput;
