import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import ForoushyarLogo from "../../assets/Profille_Icon";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

// This is a loading page which is displayed while the user is in the authentication process
const CallbackPage = () => {
  // To access search parameters
  // const [searchParams] = useSearchParams();

  // To handle authenticaion
  useEffect(() => {
    const storedResponse = localStorage.getItem("authResponse");
    const authResponse = storedResponse ? JSON.parse(storedResponse) : null;
    // const authCode = searchParams.get("code");
    // const authScope = searchParams.get("scope");
    // const authState = searchParams.get("state");
    const authCode = authResponse.code;
    const authScope = authResponse.scope;
    const authState = authResponse.state;

    const baseUrl = "";

    if (authCode && authScope && authState) {
      axios
        .post(baseUrl + "panel/oauth/callback", {
          code: authCode,
          scope: authScope,
          state: authState,
        })
        .then((response) => {
          const { token, user } = response.data;

          // save the access token and user info in the store

          // save the access token and user info in the local storage
          localStorage.setItem("accessToken", token);
          localStorage.setItem("fullName", user); // must be completed
        })
        .catch((error) => {
          //error handling
        });
    }
  }, []);

  return (
    <div className="flex flex-col w-full h-full justify-items-center items-center">
      {/* <ForoushyarLogo /> */}
      <DotLottieReact src="path/to/animation.lottie" loop autoplay />
    </div>
  );
};

export default CallbackPage;
