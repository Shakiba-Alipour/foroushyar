import { useState } from "react";
import api from "../../api/auth";
import CancelSaveButton from "../../components/CancelSaveButton";
import { useAppDispatch, useAppSelector } from "../../store/store";
import DisplayShopData from "./components/DisplayShopData";
import FaqField from "./components/FaqField";
import { authActions, User } from "../../store/authSlice";
import { RootState } from "../../store/store";

const SettingsPage: React.FC = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const dispatch = useAppDispatch();

  // to hold input fields data
  const [formData, setFormData] = useState({
    shop_name: user?.shop_name || "",
    address: user?.address || "",
    welcome_message: user?.welcome_message || "",
    phone_panel: user?.phone_panel || "",
    instagram_id: user?.instagram_id || "",
    website_url: user?.website_url || "",
  });

  // The values of input fields are stored in formData state. whenever they change, the state changes.
  // After clicking on save button, the latest state will be stored in database, local host,a nd redux store
  const inputChangeHandler = (id: string, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // to handle click on cancel button
  const cancelClickHandler = () => {
    setFormData({
      shop_name: user?.shop_name || "",
      address: user?.address || "",
      welcome_message: user?.welcome_message || "",
      phone_panel: user?.phone_panel || "",
      instagram_id: user?.instagram_id || "",
      website_url: user?.website_url || "",
    });

    window.location.reload();
  };

  const saveClickHandler = async () => {
    try {
      // to add new data to the current user
      const updatedUser = { ...user, ...formData } as User;

      if (JSON.stringify(updatedUser) === JSON.stringify(user)) {
        console.log("داده‌ها تغییر نکرده‌اند.");
        return;
      }

      // to update user's data in database
      const API_URL = process.env.REACT_APP_API_BASE_URL + "/panel/user";
      const response = await api.put(API_URL, updatedUser);

      // if changing the data in the database was successful
      if (response.data.data) {
        // to update the data in the redux store
        dispatch(authActions.update({ ...formData }));
        console.log("added to store");

        // to update the data in the local storage
        Object.entries(updatedUser).forEach(([key, value]) => {
          localStorage.setItem(
            key,
            typeof value === "boolean" ? String(value) : String(value ?? "")
          );
        });
        console.log("added to storage");

        window.location.reload();
      }
    } catch (error) {
      console.error("خطا در ذخیره تغییرات:", error);
      // notification
    }
  };

  return (
    <div className="flex flex-col lg:w-5/6 self-cente align-middler">
      <DisplayShopData onUpdate={inputChangeHandler} />
      <FaqField />
      <CancelSaveButton
        redButtonLabel="ذخیره"
        whiteButtonLabel="انصراف"
        onRedClick={saveClickHandler}
        onWhiteClick={cancelClickHandler}
      />
    </div>
  );
};

export default SettingsPage;
