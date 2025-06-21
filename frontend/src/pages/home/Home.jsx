import { useEffect, useState } from "react";
import FilterSelect from "../../components/home/FilterSelect";
import SearchInput from "../../components/home/SearchInput";
import Card from "../../components/shared/Card";
import { useGetRoadmapQuery } from "../../features/api/baseAPI";
import { ChartColumnStacked, Filter } from "lucide-react";

const Home = () => {
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [categoryFilter, setCategoryFilter] = useState("All Category");
  const [query, setQuery] = useState({});

  const { data = [], isLoading, refetch } = useGetRoadmapQuery(query);
  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleSearchInput = (value) => {
    setQuery({ title: value });
  };
  const handleCategoryFilter = (data) => {
    setQuery(data === "All Category" ? {} : { category: data });
  };
  const handleStatusFilter = (data) => {
    setQuery(data === "All Status" ? {} : { status: data });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce animation-delay-400"></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce animation-delay-600"></div>
          </div>
        </span>
      </div>
    );
  }
  return (
    <div className="px-5 md:mx-0 min-h-screen">
      <div className="flex flex-col md:flex-row gap-2 md:gap-5 pb-10 ">
        <div className="flex-1 ">
          <SearchInput handleSearchInput={handleSearchInput} />
        </div>

        <FilterSelect
          options={[
            "All Status",
            "Planned",
            "In Progress",
            "Completed",
            "On Hold",
          ]}
          icon={<Filter className="w-4 h-4 text-white/60" />}
          selected={statusFilter}
          setSelected={setStatusFilter}
          handleFunction={handleStatusFilter}
        />
        <FilterSelect
          options={[
            "All Category",
            "Accessibility",
            "Admin Tools",
            "Analytics",
            "Community",
            "Development",
            "Help",
            "Localization",
            "Navigation",
            "Notification",
            "Platform",
            "Productivity",
            "Security",
            "Support",
            "Tools",
            "UI/UX",
            "Integrations",
          ]}
          icon={<ChartColumnStacked className="w-4 h-4 text-white/60" />}
          selected={categoryFilter}
          setSelected={setCategoryFilter}
          handleFunction={handleCategoryFilter}
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pb-5">
        {data?.data?.map((data) => (
          <Card data={data} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};
export default Home;
