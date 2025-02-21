// this component displays two butoons (addon for all products activator - chatbot for all products activator)

import { Button } from "antd";
import AI_Icon from "../../../assets/AI_Icon";

interface GlobalButtonsProps {
  addonTitle: string;
  chatbotTitle: string;
}

const GlobalButtons: React.FC<GlobalButtonsProps> = ({
  addonTitle,
  chatbotTitle,
}) => {
  return (
    <div className="flex flex-row m-0 absolute bottom-16 right-0 left-0 justify-around w-full z-50">
      <Button
        className="w-5/12 px-4 py-2 font-semibold text-Primary-Default border-Primary-Background"
        onClick={handleAddonSubmit}
      >
        {addonTitle}
      </Button>
      <Button
        icon={<AI_Icon />}
        iconPosition="end"
        className="w-5/12 px-4 py-2 font-semibold bg-Success-Default text-Neutral-White stroke-Neutral-White "
        onClick={handleChatbotSubmit}
      >
        {chatbotTitle}
      </Button>
    </div>
  );
};

// to activate addon for all products
const handleAddonSubmit = () => {};

// to activate chatbot for all products
const handleChatbotSubmit = () => {};

export default GlobalButtons;
