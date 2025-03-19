import { Button } from "antd";
import axios from "axios";
import Features from "./components/Features";
import Statistics from "./components/Statistics";
import Contact from "./components/Contact";

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
    <div className="flex flex-col items-center md:w-5/6 sm:w-5/6 lg:w-full mt-8 self-center lg:text-xl">
      <div className="flex flex-col items-center" id="home">
        <h1>رباتی هوشمند برای پاسخگویی به چت‌های شما</h1>
        <p>راحت، آسان، ایمن، مطمئن</p>
        <Button
          className="w-1/2 text-Neutral-White bg-Primary-Background hover:!bg-Neutral-SecondaryBackground hover:!text-Primary-Hover hover:!border-Primary-Hover self-center mt-8 lg:text-lg"
          onClick={loginHandler}
        >
          فعال‌سازی افزونه
        </Button>
      </div>

      <Features />

      <Statistics />

      <Contact />
    </div>
  );
};

export default MainPage;
