import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "@/features/api/apiSlice";
import counterReducer from "../features/counter/reducer";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
