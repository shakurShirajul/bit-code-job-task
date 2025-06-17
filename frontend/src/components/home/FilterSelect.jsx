import { Filter, ChevronDown } from "lucide-react";
import { useState } from "react";

const FilterSelect = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All Status");
  return (
    <div className="relative w-48 text-white text-sm">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-2 cursor-pointer px-3 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-md"
      >
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-white/60" />
          <span>{selected}</span>
        </div>
        <ChevronDown className="w-4 h-4 text-white/60" />
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className="px-4 py-2 hover:bg-white/20 cursor-pointer transition-colors"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default FilterSelect;
