import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const FilterSelect = ({
  options,
  icon,
  selected,
  setSelected,
  handleFunction,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const filterRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative text-white text-sm" ref={filterRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-2 cursor-pointer px-3 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-md"
      >
        <div className="flex items-center gap-2">
          {icon}
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
                handleFunction?.(option);
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
