import { useAppSelector } from "../../app/hooks";
import FileSyntaxHighlighter from "../syntax/FileSyntaxHighlighter";
import OpendedFilesBar from "./OpenedFilesBar";

const Preview = () => {
  const { clickedFiles } = useAppSelector((state) => state.fileTree);
  return (
    <>
      <OpendedFilesBar />
      <FileSyntaxHighlighter content={clickedFiles.fileContent} />
    </>
  );
};
export default Preview;
