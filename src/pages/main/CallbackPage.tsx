import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import ForoushyarLogo from "../../assets/Logo";
import { useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";
import { authActions } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

// This is a loading page which is displayed while the user is in the authentication process
const CallbackPage = () => {
  // to access the store and state
  const dispatch = useDispatch<AppDispatch>();

  // To access search parameters
  const [searchParams] = useSearchParams();

  // To handle authenticaion
  useEffect(() => {
    const fetchData = async () => {
      // Get auth parameters from URL
      const authCode = searchParams.get("code");
      const authScope = searchParams.get("scope");
      const authState = searchParams.get("state");

      const CALLBACK_URL =
        process.env.REACT_APP_API_BASE_URL + "/panel/oauth/callback";

      if (authCode && authScope && authState) {
        try {
          const response = await axios.post(CALLBACK_URL, {
            code: authCode,
            scope: authScope,
            state: authState,
          });

          const newToken = response.data.data.user.access_token;

          if (newToken) {
            // to create the user object
            const newUser = {
              full_name: response.data.data.user.full_name || "",
              shop_name: response.data.data.user.shop_name || "",
              address: response.data.data.user.address || "",
              description: response.data.data.user.description || "",
              phone_panel: response.data.data.user.phone_panel || "",
              id: response.data.data.user.id || "",
              phone: response.data.data.user.phone || "",
              instagram_id: response.data.data.user.instagram_id || "",
              website_url: response.data.data.user.website_url || "",
              send_social: response.data.data.user.send_social || "",
              send_contact: response.data.data.user.send_contact || "",
              followup_message: response.data.data.user.followup_message || "",
              has_follow_up_message:
                response.data.data.user.has_follow_up_message || "",
              welcome_message: response.data.data.user.welcome_message || "",
            };

            // save the access token and user data in the local storage
            localStorage.setItem("access_token", newToken);
            localStorage.setItem("full_name", newUser.full_name);
            localStorage.setItem("id", newUser.id);
            localStorage.setItem("shop_name", newUser.shop_name);
            localStorage.setItem("address", newUser.address);
            localStorage.setItem("description", newUser.description);
            localStorage.setItem("phone_panel", newUser.phone_panel);
            localStorage.setItem("phone", newUser.phone);
            localStorage.setItem("instagram_id", newUser.instagram_id);
            localStorage.setItem("website_url", newUser.website_url);
            localStorage.setItem("send_social", newUser.send_social);
            localStorage.setItem("send_contact", newUser.send_contact);
            localStorage.setItem(
              "has_follow_up_message",
              newUser.has_follow_up_message
            );
            localStorage.setItem("followup_message", newUser.followup_message);
            localStorage.setItem("welcome_message", newUser.welcome_message);

            // save the access token and user data in the redux store
            dispatch(authActions.login({ user: newUser, token: newToken }));
            console.log("after");

            const DASHBORAD_URL = process.env.REACT_APP_DASHBOARD_URL || "";
            console.log(DASHBORAD_URL);
            window.location.href = DASHBORAD_URL;
          }
        } catch (error) {
          console.error("Error during authentication:", error);
        }
      }
    };

    // to call the method
    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full h-full justify-items-center items-center">
      <ForoushyarLogo />
      {/* <DotLottieReact src="path/to/animation.lottie" loop autoplay /> */}
      <p>Callback page</p>
    </div>
  );
};

export default CallbackPage;
