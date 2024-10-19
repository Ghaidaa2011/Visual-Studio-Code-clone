import { useState } from "react";
import { IFile } from "../interfaces";
import RightArrowIcon from "./SVG/Right";
import BottomArrowIcon from "./SVG/Bottom";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../app/hooks";
import { setOpenedFiles } from "../app/features/tree/fileTreeSlice";
import { doesFileObjectExist } from "../utils/functions";

interface IProps {
  FileTree: IFile;
}
const RecursiveComponent = ({ FileTree }: IProps) => {
  const { id, name, isFolder, children } = FileTree;
  const dispatch = useDispatch();
  const { openedFiles } = useAppSelector((state) => state.fileTree);
  // ** States
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // ** Handlers
  const toggle = () => setIsOpen((prev) => !prev);
  const onFileClicked = () => {
    const exists = doesFileObjectExist(openedFiles, id);
    if (exists) return;
    dispatch(setOpenedFiles([...openedFiles, FileTree]));
  };
  return (
    <div className="mb-2 ml-2 cursor-pointer">
      <div className="flex items-center mb-1">
        {isFolder ? (
          <div onClick={toggle} className="flex items-center mr-2">
            <span className="mr-1">
              {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
            </span>
            <RenderFileIcon
              fileName={name}
              isFolder={isFolder}
              isOpen={isOpen}
            />

            <span className="ml-1">{name}</span>
          </div>
        ) : (
          <div onClick={onFileClicked} className="flex items-center mr-2">
            <RenderFileIcon fileName={name} />
            <span className="ml-2">{name}</span>
          </div>
        )}
      </div>

      {isOpen &&
        children &&
        children.map((file, index) => (
          <RecursiveComponent FileTree={file} key={index} />
        ))}
    </div>
  );
};
export default RecursiveComponent;
