import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { booksApi } from "../../services/books"

export const store = configureStore({
    reducer: {
        [booksApi.reducerPath]: booksApi.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch.withTypes<AppDispatch>()
export const useAppSelector = () => useSelector.withTypes<RootState>()