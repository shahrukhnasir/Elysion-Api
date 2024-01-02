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
import authSlice from "./Auth/authSlice";
import cartVariantSlice from "../Redux/CartCreate/CartCreate";
// import AppoinmentDateSlice from "../Redux/AppoinmentDate/appoinmentDate";
import { AppoinmentDateSlice } from "./Appoinment/appointDate";
import { appointmentSlice } from "./Appoinment/appointmentDetails";


const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    authSlice: authSlice,
    cartVariantSlice: cartVariantSlice,
    AppoinmentDateSlice:AppoinmentDateSlice ,
    appointmentSlice: appointmentSlice,
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
