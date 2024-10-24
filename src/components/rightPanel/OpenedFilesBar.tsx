import { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import ContextMenu from "../common/ContextMenu";
import OpendedFilesBarTab from "./OpenedFilesBarTab";

const OpenedFilesBar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const { openedFiles } = useAppSelector((state) => state.fileTree);
  return (
    <div className="w-full">
      <div
        onContextMenu={(e) => {
          e.preventDefault();
          setMenuPosition({ x: e.clientX, y: e.clientY });
          setShowMenu(true);
        }}
        className="flex items-center border-b-[1px] border-[#ffffff1f]"
      >
        {openedFiles.map((file) => (
          <OpendedFilesBarTab file={file} key={file.id} />
        ))}
      </div>
      {showMenu && (
        <ContextMenu Positions={menuPosition} setShowMenu={setShowMenu} />
      )}
    </div>
  );
};
export default OpenedFilesBar;
