import { configureStore, combineReducers } from '@reduxjs/toolkit'
import fileTree from './features/tree/fileTreeSlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const fileTreePersistConfig = {
  key: "fileTree",
  storage,
}
const rootReducer = combineReducers({
  fileTree: persistReducer(fileTreePersistConfig, fileTree)
})
const store = configureStore({
  reducer: rootReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

const persistor = persistStore(store)
export { store, persistor };