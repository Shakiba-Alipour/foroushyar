import { useState } from "react";
import api from "../../api/auth";
import CancelSaveButton from "../../components/CancelSaveButton";
// import { useAppDispatch, useAppSelector } from "../../store/hooks";
import DisplayShopData from "./components/DisplayShopData";
import FaqField from "./components/FaqField";
import { authActions, User } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

const SettingsPage = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  // to hold input fields data
  const [formData, setFormData] = useState({
    shop_name: user?.shop_name || "",
    address: user?.address || "",
    welcome_message: user?.welcome_message || "",
    phone_panel: user?.phone_panel || null,
    instagram_id: user?.instagram_id || "",
    website_url: user?.website_url || "",
  });

  // const [formData, setFormData] = useState({ ...user });

  // Sync formData with user when user updates
  // useEffect(() => {
  //   setFormData({ ...user });
  // }, [user]);

  // The values of input fields are stored in formData state. whenever they change, the state changes.
  // After clicking on save button, the latest sate will be stored in database, local host,a nd redux store
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
  };

  const saveClickHandler = async () => {
    try {
      // to add new data to the current user
      const updatedUser = Object.fromEntries(
        Object.entries({ ...user, ...formData }).map(([key, value]) => [
          key,
          value ?? "",
        ])
      ) as unknown as User;

      // to update user's data in database
      const API_URL = process.env.REACT_APP_API_BASE_URL + "/panel/user";
      const response = await api.put(API_URL, updatedUser);

      // if changing the data in the database was successful
      if (response.data.success) {
        // to change undefined to null
        // Object.entries(updatedUser).forEach(([key, value]) => {
        //   const typedKey = key as keyof typeof updatedUser;
        //   if (value === undefined || value === null) {
        //     updatedUser[typedKey] = "";
        //   }

        //   localStorage.setItem(key, String(value));
        // });

        // to update the data in the redux store
        dispatch(authActions.update({ user: updatedUser }));

        // to update the data in the local storage
        Object.entries(updatedUser).forEach(([key, value]) => {
          localStorage.setItem(key, String(value ?? ""));
        });
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
