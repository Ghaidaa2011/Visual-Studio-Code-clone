import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  setClickedFileContentAction,
  setOpenedFilesAction,
} from "../../app/features/tree/fileTreeSlice";

interface IProps {
  setShowMenu: (value: boolean) => void;
  Positions: { x: number; y: number };
}
const ContextMenu = ({ Positions: { x, y }, setShowMenu }: IProps) => {
  const { openedFiles, tabIdToRemove } = useAppSelector(
    (state) => state.fileTree
  );
  const dispatch = useAppDispatch();
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [setShowMenu]);
  //Handlers
  const onClose = (tabIdToRemove: string | null) => {
    const filtered = openedFiles.filter((file) => file.id !== tabIdToRemove);
    const lastTab = filtered[filtered.length - 1];
    if (!lastTab) {
      dispatch(setOpenedFilesAction([]));
      dispatch(
        setClickedFileContentAction({
          activeTabId: null,
          fileContent: "",
          fileName: "",
        })
      );
      return;
    }
    const { id, content, name } = lastTab;
    dispatch(setOpenedFilesAction(filtered));
    dispatch(
      setClickedFileContentAction({
        activeTabId: id,
        fileContent: content,
        fileName: name,
      })
    );
    setShowMenu(false);
  };
  const onCloseAll = () => {
    dispatch(setOpenedFilesAction([]));
    setShowMenu(false);
  };
  return (
    <div ref={menuRef}>
      <ul
        className="z-10 w-32 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-2"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        style={{
          position: "absolute",
          left: x,
          top: y,
        }}
      >
        <li
          className="text-gray-400 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 duration-300 rounded-sm"
          role="menuitem"
          onClick={() => onClose(tabIdToRemove)}
        >
          Close
        </li>
        <li
          className="text-gray-400 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 duration-300 rounded-sm"
          role="menuitem"
          onClick={onCloseAll}
        >
          Close All
        </li>
      </ul>
    </div>
  );
};
export default ContextMenu;
