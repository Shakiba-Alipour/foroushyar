import { configureStore } from "@reduxjs/toolkit";
import authReducer, { authActions } from "./authSlice";
// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Middleware } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  // to run the action in redux
  const result = next(action);

  const state = store.getState();
  const user = state.auth.user;
  const token = state.auth.token;

  if (user.id && token) {
    store.dispatch(authActions.update({ user: user }));
  }

  if (!user || !token) {
    const newUser = {
      full_name: localStorage.getItem("full_name") || "",
      id: localStorage.getItem("id") || "",
      shop_name: localStorage.getItem("shop_name") || "",
      address: localStorage.getItem("address") || "",
      description: localStorage.getItem("description") || "",
      phone_panel: localStorage.getItem("phone_panel") || "",
      phone: localStorage.getItem("phone") || "",
      instagram_id: localStorage.getItem("instagram_id") || "",
      website_url: localStorage.getItem("website_url") || "",
      send_social: localStorage.getItem("send_social") || "",
      send_contact: localStorage.getItem("send_contact") || "",
      has_follow_up_message:
        localStorage.getItem("has_follow_up_message") || "",
      followup_message: localStorage.getItem("followup_message") || "",
      welcome_message: localStorage.getItem("welcome_message") || "",
    };
    const newToken = localStorage.getItem("access_token") || "";

    if (newUser.id && newToken) {
      store.dispatch(authActions.login({ user: newUser, token: newToken }));
    }
  }

  return result;
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
// Get the type of the store variable
export type AppStore = typeof store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Created typed versions of the useDispatch and useSelector hooks to not
// to import the RootState and AppDispatch types into each component
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
