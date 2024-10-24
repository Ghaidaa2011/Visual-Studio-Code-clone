import Explorer from "../SVG/Explorer";
const SidePanel = () => {
  return (
    <div className="w-16 flex justify-center">
      <span className="p-4 text-[#ffffff44]  hover:cursor-pointer hover:text-[#ffffffff] transition duration-500 ease-in-out">
        <Explorer />
      </span>
    </div>
  );
};
export default SidePanel;
