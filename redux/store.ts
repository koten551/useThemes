import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./auth/loginSlice";
const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
    },
    middleware: []
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch