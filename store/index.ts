import { configureStore } from "@reduxjs/toolkit";
import { apilitApi } from "@/features/api/apiSlice";

const store = configureStore({
  reducer: {
    [apilitApi.reducerPath]: apilitApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apilitApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
