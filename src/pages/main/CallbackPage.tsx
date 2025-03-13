import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import ForoushyarLogo from "../../assets/Profille_Icon";
import { useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../../store/store";
// import { authSlice.reduers.login as login } from "../../store/authSlice";

// This is a loading page which is displayed while the user is in the authentication process
const CallbackPage = () => {
  const dispatch = useAppDispatch();

  // To access search parameters
  const [searchParams] = useSearchParams();

  // To handle authenticaion
  useEffect(() => {
    const fetchData = async () => {
      // Get auth parameters from URL
      const authCode = searchParams.get("code");
      const authScope = searchParams.get("scope");
      const authState = searchParams.get("state");

      const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

      if (authCode && authScope && authState) {
        try {
          const response = await axios.post(
            API_BASE_URL + "/panel/oauth/callback",
            {
              code: authCode,
              scope: authScope,
              state: authState,
            }
          );

          const token = response.data.data.user.access_token;

          if (token) {
            const user = {
              full_name: response.data.data.user.full_name,
              shop_name: response.data.data.user.shop_name,
              address: response.data.data.user.address,
              description: response.data.data.user.description,
              phone_panel: Number(response.data.data.user.phone_panel),
              id: response.data.data.user.id,
              phone: Number(response.data.data.user.phone),
              instagram_id: response.data.data.user.instagram_id,
              website_url: response.data.data.user.website_url,
              send_social: Boolean(response.data.data.user.send_social),
              send_contact: Boolean(response.data.data.user.send_contact),
              followup_message: response.data.data.user.followup_message,
              has_follow_up_message:
                response.data.data.user.has_follow_up_message,
              welcome_message: response.data.data.user.welcome_message,
            };

            // save the access token and user data in the local storage
            localStorage.setItem("access_token", token);
            localStorage.setItem("fullName", user.full_name);
            localStorage.setItem("id", user.id);
            localStorage.setItem("shopName", user.shop_name);
            localStorage.setItem("address", user.address);
            localStorage.setItem("description", user.description);
            localStorage.setItem("phonePanel", user.phone_panel.toString());
            localStorage.setItem("phone", user.phone.toString());
            localStorage.setItem("instagramId", user.instagram_id);
            localStorage.setItem("websiteUrl", user.website_url);
            localStorage.setItem(
              "sendSocial",
              JSON.stringify(user.send_social)
            );
            localStorage.setItem(
              "sendContact",
              JSON.stringify(user.send_contact)
            );
            localStorage.setItem(
              "has_follow_up_message",
              user.has_follow_up_message
            );
            localStorage.setItem("followupMessage", user.followup_message);
            localStorage.setItem("welcomeMessage", user.welcome_message);

            // save the access token and user data in the redux store
            // dispatch(login({ user, token }));

            window.location.href = "http://localhost:3000/dashboard"; // MUST BE CHANGED
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
      {/* <ForoushyarLogo /> */}
      {/* <DotLottieReact src="path/to/animation.lottie" loop autoplay /> */}
      <p>Callback page</p>
    </div>
  );
};

export default CallbackPage;
