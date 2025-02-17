// this component displays two butoons (addon for all products activator - chatbot for all products activator)

import { Button } from "antd";
import AI_Icon from "../../../assets/AI_Icon";

const GlobalButtons = () => {
  return (
    <div className="flex flex-row m-0 gap-2 justify-center w-full z-50">
      <Button
        className="w-max px-4 py-2 font-semibold text-Primary-Default border-Primary-Background"
        onClick={handleAddonSubmit}
      >
        محصولات مرتبط همه
      </Button>
      <Button
        icon={<AI_Icon />}
        iconPosition="end"
        className="w-max px-4 py-2 font-semibold bg-Success-Default text-Neutral-White stroke-Neutral-White "
        onClick={handleChatbotSubmit}
      >
        چت هوشمند همه
      </Button>
    </div>
  );
};

// to activate addon for all products
const handleAddonSubmit = () => {};

// to activate chatbot for all products
const handleChatbotSubmit = () => {};

export default GlobalButtons;
