import { Button } from "antd";
import AI_Icon from "../assets/AI_Icon";

// This component displays two buttons: addon and chatbot (both total and per product)

interface Props {
  addonLabel: string;
  chatbotLabel: string;
}

const ServicesButtons: React.FC<Props> = ({ addonLabel, chatbotLabel }) => {
  // Defined active button style
  const activeStyle = "bg-Success-Default text-Neutral-White";
  // Defined inactive button style
  const inActiveStyle = "text-Primary-Default border-Primary-Background";

  return (
    <div className="flex flex-row w-fit mt-4 mb-2">
      <Button className="ml-1 font-semibold">{addonLabel}</Button>
      <Button
        variant="solid"
        className="mr-1 font-semibold"
        icon={<AI_Icon />}
        iconPosition="end"
      >
        {chatbotLabel}
      </Button>
    </div>
  );
};

export default ServicesButtons;
