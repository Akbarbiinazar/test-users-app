import { baseApi } from "@/shared/config/api/baseApi"
import { State } from "@/shared/config/store/State";
import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "@/widgets/User/slices/slice";
import { themeSlice } from "@/entities/session/model/slices";

export const createReduxStore = (initialState?: State) => {
    return configureStore({
        reducer: {
            [baseApi.reducerPath]: baseApi.reducer,
            users: usersReducer,
            theme: themeSlice.reducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(baseApi.middleware), // Add the middleware here
        preloadedState: initialState, // Use preloadedState for initial state
    });
}

const store = createReduxStore();
export type RootState = ReturnType<typeof store.getState>;