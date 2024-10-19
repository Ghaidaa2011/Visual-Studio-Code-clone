import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFile } from '../../../interfaces'

interface IClickedFiles {
  fileName: string;
  fileContent: string;
}
interface IInitialState {
  openedFiles: IFile[];
  clickedFiles: IClickedFiles;
}
const initialState: IInitialState = {
  openedFiles: [],
  clickedFiles: {
    fileName: "",
    fileContent: "",
  }
}
export const fileTreeSlice = createSlice({
  name: 'fileTree',
  initialState,
  reducers: {
    setOpenedFiles: (state, action: PayloadAction<IFile[]>) => {
      state.openedFiles = action.payload;
    }
  },
})
export const { setOpenedFiles } = fileTreeSlice.actions
export default fileTreeSlice.reducer