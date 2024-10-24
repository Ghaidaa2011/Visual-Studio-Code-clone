import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFile } from '../../../interfaces'

interface IClickedFiles {
  activeTabId: string | null;
  fileName: string;
  fileContent: string | undefined;
}
interface IInitialState {
  openedFiles: IFile[];
  clickedFiles: IClickedFiles;
  tabIdToRemove: string | null;
}
const initialState: IInitialState = {
  openedFiles: [],
  clickedFiles: {
    activeTabId: null,
    fileName: "",
    fileContent: "",
  },
  tabIdToRemove: null,
}
export const fileTreeSlice = createSlice({
  name: 'fileTree',
  initialState,
  reducers: {
    setOpenedFilesAction: (state, action: PayloadAction<IFile[]>) => {
      state.openedFiles = action.payload;
    },
    setClickedFileContentAction: (state, action: PayloadAction<IClickedFiles>) => {
      state.clickedFiles = action.payload;
    },
    setTabIdToRemoveAction: (state, action: PayloadAction<string | null>) => {
      state.tabIdToRemove = action.payload;
    },
  },
})
export const { setOpenedFilesAction, setClickedFileContentAction, setTabIdToRemoveAction } = fileTreeSlice.actions
export default fileTreeSlice.reducer