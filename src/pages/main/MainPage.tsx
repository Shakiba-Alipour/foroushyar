import { Button } from "antd";
import axios from "axios";
import { APP_BASE_URL } from "./api/auth";

// This page is displayed at the base url, before the login button is clicked
const MainPage = () => {
  // To handle logging in
  const loginHandler = async () => {
    // To authenticate the user
    const returnUrl = "http://localhost:3000/dashboard";
    const redirectUrl = "";
    try {
      const response = await axios.get(redirectUrl, {
        params: {
          redturn_url: returnUrl,
          action: "LANDING_PAGE", // example
        },
      });

      localStorage.setItem("authResponse", JSON.stringify(response.data));

      // To display the loading page
      window.location.href = "http://localhost:3000/auth/callback";
    } catch (error) {
      console.error("Error starting authentication:", error);
    }
  };

  return (
    // login button
    <Button className="w-1/2 self-center" onClick={loginHandler}>
      فعال‌سازی افزونه
    </Button>
  );
};

export default MainPage;
