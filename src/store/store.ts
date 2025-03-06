import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
// Get the type of the store variable
export type AppStore = typeof store;

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<AppStore["getState"]>;
type AppDispatch = AppStore["dispatch"];

// Created typed versions of the useDispatch and useSelector hooks to not
// to import the RootState and AppDispatch types into each component
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
