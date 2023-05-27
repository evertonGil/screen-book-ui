import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import modalDialogReducer from "../features/modal-dialog/modal-dialog.redux"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modalDialog: modalDialogReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
