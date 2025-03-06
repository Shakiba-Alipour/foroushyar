import { Button } from "antd";
import { useNavigate } from "react-router-dom";

// This page is displayed at the base url, before the login button is clicked
const MainPage = () => {
  const navigate = useNavigate();
  return (
    // login buttn
    <Button
      className="w-1/2 self-center"
      onClick={() => navigate("auth/callback")}
    >
      فعال‌سازی افزونه
    </Button>
  );
};

export default MainPage;
