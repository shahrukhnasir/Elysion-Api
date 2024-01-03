import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
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

import authSlice from "../Redux/Auth/authSlice";
import AppoinmentDateSlice from "./Appoinment/appointDate";
import appointmentSlice from "./Appoinment/appointmentDetails";
import serviceSlice from "./Appoinment/selectService";

const persistConfig = {
  key: "root",
  storage,
};

// const persistedReducer = persistReducer(
//   persistConfig,
//   combineReducers({
//     authSlice: authSlice,
//     currentDate: AppoinmentDateSlice,
//     appointment: appointmentSlice,
//     selectService: serviceSlice,
//   })
// );
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    authSlice: authSlice,
    currentDate: AppoinmentDateSlice,
    appointment: appointmentSlice,
    selectService: serviceSlice,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
