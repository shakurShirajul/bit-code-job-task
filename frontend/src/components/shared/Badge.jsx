const Badge = ({ status }) => {
  let style = "text-white border-white/20";
  if (status === "In Progress") {
    style = "bg-[#FEF9C3] text-[#854D0E] ";
  } else if (status === "Planned") {
    style = "bg-blue-100 text-blue-800 ";
  } else if (status === "Completed") {
    style = "bg-green-100 text-green-800";
  } else if (status === "On Hold") {
    style = "bg-gray-100 text-gray-800";
  }
  return (
    <span
      className={`rounded-full border px-2.5 py-0.5 font-semibold border-transparent text-xs ${style} `}
    >
      {status}
    </span>
  );
};
export default Badge;
