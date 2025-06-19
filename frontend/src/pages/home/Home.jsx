import { useEffect } from "react";
import FilterSelect from "../../components/home/FilterSelect";
import SearchInput from "../../components/home/SearchInput";
import Card from "../../components/shared/Card";
import { useGetRoadmapQuery } from "../../features/api/baseAPI";

// const roadmapData = [
//   {
//     id: 1,
//     title: "Dark Mode Support",
//     description: "Add a toggle for light and dark themes across the app.",
//     category: "UI/UX",
//     status: "Planned",
//     upvotes: 87,
//     createdAt: "2024-12-01T10:00:00Z",
//   },
//   {
//     id: 2,
//     title: "Mobile App",
//     description: "Build native mobile apps for iOS and Android.",
//     category: "Platform",
//     status: "In Progress",
//     upvotes: 134,
//     createdAt: "2024-12-03T12:30:00Z",
//   },
//   {
//     id: 3,
//     title: "Two-Factor Authentication",
//     description: "Improve account security by adding 2FA support.",
//     category: "Security",
//     status: "Planned",
//     upvotes: 66,
//     createdAt: "2024-12-04T09:45:00Z",
//   },
//   {
//     id: 4,
//     title: "Public User Profiles",
//     description: "Allow users to have customizable public profiles.",
//     category: "Community",
//     status: "Under Review",
//     upvotes: 42,
//     createdAt: "2024-12-05T14:10:00Z",
//   },
//   {
//     id: 5,
//     title: "Bulk Upload Feature",
//     description: "Let users upload multiple files at once.",
//     category: "Productivity",
//     status: "Planned",
//     upvotes: 58,
//     createdAt: "2024-12-06T11:00:00Z",
//   },
//   {
//     id: 6,
//     title: "Tag-Based Filtering",
//     description: "Filter roadmap items by tag or category.",
//     category: "Navigation",
//     status: "Completed",
//     upvotes: 29,
//     createdAt: "2024-12-07T13:45:00Z",
//   },
//   {
//     id: 7,
//     title: "Keyboard Shortcuts",
//     description: "Speed up actions with keyboard shortcut support.",
//     category: "Productivity",
//     status: "In Progress",
//     upvotes: 35,
//     createdAt: "2024-12-08T08:20:00Z",
//   },
//   {
//     id: 8,
//     title: "Weekly Email Summary",
//     description: "Send users a summary of updates and top-voted ideas.",
//     category: "Notifications",
//     status: "Planned",
//     upvotes: 73,
//     createdAt: "2024-12-09T15:40:00Z",
//   },
//   {
//     id: 9,
//     title: "API Access for Developers",
//     description: "Expose a public API to interact with roadmap data.",
//     category: "Development",
//     status: "In Progress",
//     upvotes: 102,
//     createdAt: "2024-12-10T17:00:00Z",
//   },
//   {
//     id: 10,
//     title: "Live Chat Support",
//     description: "Enable real-time help for users through chat.",
//     category: "Support",
//     status: "Planned",
//     upvotes: 47,
//     createdAt: "2024-12-11T12:10:00Z",
//   },
//   {
//     id: 11,
//     title: "Markdown Support in Comments",
//     description: "Allow basic markdown syntax in user comments.",
//     category: "Community",
//     status: "Completed",
//     upvotes: 33,
//     createdAt: "2024-12-12T11:55:00Z",
//   },
//   {
//     id: 12,
//     title: "Multi-language Support",
//     description: "Translate the app into multiple languages.",
//     category: "Localization",
//     status: "Planned",
//     upvotes: 95,
//     createdAt: "2024-12-13T16:30:00Z",
//   },
//   {
//     id: 13,
//     title: "Comment Upvoting",
//     description: "Let users upvote the best comments.",
//     category: "Community",
//     status: "Under Review",
//     upvotes: 40,
//     createdAt: "2024-12-14T10:30:00Z",
//   },
//   {
//     id: 14,
//     title: "Slack Integration",
//     description: "Push updates and notifications to Slack channels.",
//     category: "Integrations",
//     status: "Planned",
//     upvotes: 64,
//     createdAt: "2024-12-15T09:10:00Z",
//   },
//   {
//     id: 15,
//     title: "Export to PDF",
//     description: "Allow exporting roadmap items as a PDF document.",
//     category: "Tools",
//     status: "In Progress",
//     upvotes: 27,
//     createdAt: "2024-12-16T13:00:00Z",
//   },
//   {
//     id: 16,
//     title: "Single Sign-On (SSO)",
//     description: "Enable enterprise-level SSO login options.",
//     category: "Security",
//     status: "Planned",
//     upvotes: 51,
//     createdAt: "2024-12-17T14:20:00Z",
//   },
//   {
//     id: 17,
//     title: "User Mentions in Comments",
//     description: "Mention other users using @username in comments.",
//     category: "Community",
//     status: "Completed",
//     upvotes: 38,
//     createdAt: "2024-12-18T11:35:00Z",
//   },
//   {
//     id: 18,
//     title: "Progress Tracker for Features",
//     description: "Visual progress bars for roadmap items.",
//     category: "UI/UX",
//     status: "In Progress",
//     upvotes: 81,
//     createdAt: "2024-12-19T15:45:00Z",
//   },
//   {
//     id: 19,
//     title: "Theme Customization",
//     description: "Allow users to choose and save their own theme.",
//     category: "UI/UX",
//     status: "Planned",
//     upvotes: 48,
//     createdAt: "2024-12-20T10:25:00Z",
//   },
//   {
//     id: 20,
//     title: "CSV Import for Admin",
//     description: "Let admins bulk-import roadmap data via CSV.",
//     category: "Admin Tools",
//     status: "Completed",
//     upvotes: 22,
//     createdAt: "2024-12-21T12:40:00Z",
//   },
// ];

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
