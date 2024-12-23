import {
  setClickedFileContentAction,
  setTabIdToRemoveAction,
} from "../../app/features/tree/fileTreeSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import useOnClose from "../../hooks/useOnCloseOpenedTab";
import { IFile } from "../../interfaces";
import RenderFileIcon from "../common/RenderFileIcon";
import CloseIcon from "../SVG/CloseIcon";

interface IProps {
  file: IFile;
}
const OpendedFilesBarTab = ({ file }: IProps) => {
  const { closeTab } = useOnClose();
  const dispatch = useAppDispatch();
  const {
    clickedFiles: { activeTabId },
  } = useAppSelector((state) => state.fileTree);
  //Handlers
  const onClick = () => {
    const { id, name, content } = file;
    dispatch(
      setClickedFileContentAction({
        fileName: name,
        fileContent: content,
        activeTabId: id,
      })
    );
  };

  return (
    <div
      className={`max-w-screen-md flex items-center p-2 border-t-2 ${
        file.id === activeTabId ? "border-[#cf6ccf]" : "border-transparent"
      }`}
      onClick={onClick}
      onContextMenu={(e) => {
        e.preventDefault();
        dispatch(setTabIdToRemoveAction(file.id));
      }}
    >
      <RenderFileIcon fileName={file.name} />
      <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-md">
        {file.name}
      </span>
      <span
        onClick={(e) => {
          e.stopPropagation();
          closeTab(file.id);
        }}
        onContextMenu={(e) => {
          e.preventDefault();
          dispatch(setTabIdToRemoveAction(file.id));
        }}
        className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md"
      >
        <CloseIcon />
      </span>
    </div>
  );
};
export default OpendedFilesBarTab;
