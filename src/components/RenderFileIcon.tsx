import IconImg from "./IconImg";
import FileIcon from "./SVG/File";

interface IProps {
  fileName: string;
  isFolder?: boolean;
  isOpen?: boolean;
}
const RenderFileIcon = ({ fileName, isFolder, isOpen }: IProps) => {
  const extention = fileName.split(".").pop();
  // Files
  if (extention === "tsx") return <IconImg src="/icons/react_ts.svg" />;
  if (extention === "jsx") return <IconImg src="/icons/react.svg" />;
  if (extention === "html") return <IconImg src="/icons/html.svg" />;
  if (extention === "svg") return <IconImg src="/icons/svg.svg" />;

  //Folder
  if (extention === "node_modules" && isFolder)
    return isOpen ? (
      <IconImg src="/icons/folder-node-open.svg" />
    ) : (
      <IconImg src="/icons/folder-node.svg" />
    );
  if (extention === "src" && isFolder)
    return isOpen ? (
      <IconImg src="/icons/folder-src-open.svg" />
    ) : (
      <IconImg src="/icons/folder-src.svg" />
    );
  if (extention === "components" && isFolder)
    return isOpen ? (
      <IconImg src="/icons/folder-components-open.svg" />
    ) : (
      <IconImg src="/icons/folder-components.svg" />
    );
  if (extention === "public" && isFolder)
    return isOpen ? (
      <IconImg src="/icons/folder-public-open.svg" />
    ) : (
      <IconImg src="/icons/folder-public.svg" />
    );
  if (extention === "vite" && isFolder)
    return isOpen ? (
      <IconImg src="/icons/vite-open.svg" />
    ) : (
      <IconImg src="/icons/vite.svg" />
    );
  if (extention === "images" && isFolder)
    return isOpen ? (
      <IconImg src="/icons/folder-images-open.svg" />
    ) : (
      <IconImg src="/icons/folder-images.svg" />
    );
  // Not a specific folder
  if (isFolder && isOpen)
    return <IconImg src="/icons/folder-default-open.svg" />;
  if (isFolder && !isOpen) return <IconImg src="/icons/folder-default.svg" />;
  //Not a specific file
  return <FileIcon />;
};
export default RenderFileIcon;
