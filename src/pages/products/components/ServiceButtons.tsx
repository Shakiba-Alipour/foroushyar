// This component displays two butoons (addon for all products activator - chatbot for all products activator)

import { Button } from "antd";
import AI_Icon from "../../../assets/AI_Icon";

interface ButtonsProps {
  addonLabel: string;
  chatbotLabel: string;
  isGlobal?: boolean; //checks if the buttons are set for all products or not
}

const ServiceButtons: React.FC<ButtonsProps> = ({
  addonLabel,
  chatbotLabel,
  isGlobal,
}) => {
  // Defined active button style
  const activeStyle = "bg-Success-Default text-Neutral-White";
  // Defined inactive button style
  const inActiveStyle = "text-Primary-Default border-Primary-Background";
  // container's styling
  let containerStyle = "flex flex-row m-0  justify-around";
  isGlobal
    ? (containerStyle =
        containerStyle + " w-full absolute bottom-16 right-0 left-0 z-50")
    : (containerStyle = containerStyle + " w-fit justify-around  mt-4 mb-2");

  return (
    <div className={containerStyle}>
      <Button className="w-5/12 px-4 py-2 font-semibold" variant="solid">
        {addonLabel}
      </Button>
      <Button
        icon={<AI_Icon />}
        iconPosition="end"
        className="w-5/12 px-4 py-2 font-semibold"
        variant="solid"
      >
        {chatbotLabel}
      </Button>
    </div>
  );
};

export default ServiceButtons;
