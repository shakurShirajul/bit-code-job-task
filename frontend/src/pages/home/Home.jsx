import { useEffect } from "react";
import FilterSelect from "../../components/home/FilterSelect";
import SearchInput from "../../components/home/SearchInput";
import Card from "../../components/shared/Card";
import { useGetRoadmapQuery } from "../../features/api/baseAPI";

const Home = () => {
  const { data, isLoading, refetch } = useGetRoadmapQuery();
  useEffect(() => {
    refetch();
  }, [refetch]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <div className="flex gap-5 pb-10">
        <div className="flex-1">
          <SearchInput />
        </div>
        <FilterSelect
          options={[
            "All Status",
            "Planned",
            "In Progress",
            "Completed",
            "On Hold",
          ]}
        />
        <FilterSelect
          options={[
            "All Status",
            "Planned",
            "In Progress",
            "Completed",
            "On Hold",
          ]}
        />
      </div>

      <div className="grid grid-cols-3 gap-5 pb-5">
        {data.data.map((data) => (
          <Card data={data} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};
export default Home;
