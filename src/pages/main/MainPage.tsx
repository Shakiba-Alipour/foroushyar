import { Button } from "antd";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

// This page is displayed at the base url, before the login button is clicked
const MainPage = () => {
  // To handle logging in
  const loginHandler = async () => {
    // To authenticate the user
    const returnUrl = process.env.REACT_APP_AUTH_CALLBACK_URL as string;
    const redirectUrl = process.env.REACT_APP_REDIRECT_URL as string;

    try {
      const response = await axios.get(redirectUrl, {
        params: {
          return_url: returnUrl,
          action: "LANDING_PAGE", // example
        },
      });

      if (response) {
        // Redirect to authentication callback
        window.location.href = response.data.data.redirect_url;
      }
    } catch (error) {
      console.error("Error starting authentication:", error);
    }
  };

  return (
    // login button
    <div className="flex flex-col items-center">
      <h1>رباتی هوشمند برای پاسخگویی به چت‌های شما</h1>
      <p>راحت، آسان، ایمن، مطمئن</p>
      <Button className="w-1/2 self-center" onClick={loginHandler}>
        فعال‌سازی افزونه
      </Button>
    </div>
  );
};

export default MainPage;
