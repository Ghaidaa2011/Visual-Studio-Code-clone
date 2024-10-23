import { useAppSelector } from "../../app/hooks";
import OpendedFilesBarTab from "./OpendedFilesBarTab";

const OpenedFilesBar = () => {
  const { openedFiles } = useAppSelector((state) => state.fileTree);
  return (
    <div className="w-full">
      <div className="flex items-center border-b-[1px] border-[#ffffff1f]">
        {openedFiles.map((file) => (
          <OpendedFilesBarTab file={file} key={file.id} />
        ))}
      </div>
    </div>
  );
};
export default OpenedFilesBar;
