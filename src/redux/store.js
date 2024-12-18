import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  camperReducer,
  filtersReducer,
  selectedReducer,
} from "./campers/slice.js";

const selectedConfig = {
  key: "selectedKey",
  storage,
  whitelist: ["selected"],
};

export const store = configureStore({
  reducer: {
    campers: camperReducer,
    filters: filtersReducer,
    selected: persistReducer(selectedConfig, selectedReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
