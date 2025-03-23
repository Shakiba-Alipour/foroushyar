import React, { useEffect } from "react";
import { message } from "antd";

// This component contains the structure of every notification in the app (error, success, etc)

interface NotificationProps {
  text: string;
  isSuccessful: boolean; //true for success, false for error
}

const Notification: React.FC<NotificationProps> = ({ text, isSuccessful }) => {
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    messageApi.open({
      type: isSuccessful ? "success" : "error",
      content: text,
    });
  }, [messageApi, text, isSuccessful]);

  return <>{contextHolder}</>;
};

export default Notification;
