import { setClickedFileContentAction, setOpenedFilesAction } from "../app/features/tree/fileTreeSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const useOnClose = () => {
  const dispatch = useAppDispatch();
  const openedFiles = useAppSelector((state) => state.fileTree.openedFiles);

  const closeTab = (fileId: string | null) => {
    const filtered = openedFiles.filter((file) => file.id !== fileId);
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
    } else {
      const { id, content, name } = lastTab;
      dispatch(setOpenedFilesAction(filtered));
      dispatch(
        setClickedFileContentAction({
          activeTabId: id,
          fileContent: content,
          fileName: name,
        })
      );
    }
  };

  return { closeTab };
};
export default useOnClose;