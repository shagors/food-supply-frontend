import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import { baseApi } from "./api/baseApi";
import themeReducer from "./features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
