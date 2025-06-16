import { Filter } from "lucide-react";

const FilterSelect = () => {
  return (
    <div className="flex items-center px-2 bg-white rounded-lg py-1.5 text-sm">
      <Filter className="w-4 h-4 mr-2" />
      <select name="status" className="focus:outline-none">
        <option defaultChecked value="volvo">
          All Status
        </option>
        <option value="saab">Planned</option>
        <option value="mercedes">In Progress</option>
        <option value="audi">Completed</option>
        <option value="audi"> On Hold</option>
      </select>
    </div>
  );
};
export default FilterSelect;
