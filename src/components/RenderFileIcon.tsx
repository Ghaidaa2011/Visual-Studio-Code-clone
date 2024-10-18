import { extentionIconPaths } from "../constants";
import IconImg from "./IconImg";
import FileIcon from "./SVG/File";

interface IProps {
  fileName: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const RenderFileIcon = ({ fileName, isFolder, isOpen }: IProps) => {
  const extention = fileName.split(".").pop();

  if (
    //extention?
    extention && //                      object               key
    Object.prototype.hasOwnProperty.call(extentionIconPaths, extention)
  ) {
    const iconPath = isFolder
      ? isOpen
        ? `${extentionIconPaths[extention]}-open.svg`
        : `${extentionIconPaths[extention]}.svg`
      : `${extentionIconPaths[extention]}.svg`;
    //the retrun from this condition
    return <IconImg src={iconPath} />;
  }
  // Not a specific folder
  if (isFolder && isOpen)
    return <IconImg src="/icons/folder-default-open.svg" />;
  if (isFolder && !isOpen) return <IconImg src="/icons/folder-default.svg" />;
  //Not a specific file
  return <FileIcon />;
};
export default RenderFileIcon;
