const Badge = ({ status }) => {
  return (
    <span className="bg-[#FEF9C3] text-[#854D0E] text-sm px-2 py-0.5 rounded-xl font-semibold ">
      {status}
    </span>
  );
};
export default Badge;
