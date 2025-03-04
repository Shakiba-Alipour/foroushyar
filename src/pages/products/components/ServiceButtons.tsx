// This component displays two butoons (addon for all products activator - chatbot for all products activator)

import { Button } from "antd";
import AI_Icon from "../../../assets/AI_Icon";
import useFeatureToggle from "../hooks/useFeatureToggle";

interface ButtonsProps {
  addonLabel: string;
  chatbotLabel: string;
  isGlobal?: boolean; //checks if the buttons are set for all products or not
  isAddonActive: boolean;
  isChatbotActive: boolean;
}

const ServiceButtons: React.FC<ButtonsProps> = ({
  addonLabel,
  chatbotLabel,
  isGlobal,
  isAddonActive,
  isChatbotActive,
}) => {
  // Defined active button style
  const activeStyle =
    " bg-Success-Default text-Neutral-White hover:!border-Success-Hover hover:!text-Success-Hover";
  // Defined inactive button style
  const inActiveStyle =
    " text-Primary-Default border-Primary-Background hover:!border-Primary-Hover hover:!text-Primary-Hover";
  // container's styling
  let containerStyle = `flex flex-row m-0  justify-around ${
    isGlobal ? " w-full absolute bottom-16 right-0 left-0 z-50" : " mt-4 mb-2"
  }`;

  // buttons styling
  let buttonGeneralStyle = "w-5/12 px-4 py-2 font-semibold";

  // useFeatureToggle hook
  const chatbotHook = useFeatureToggle({
    feature: "chatbot",
    isFeatureActive: isChatbotActive,
    isGlobal: isGlobal,
  });
  const addonHook = useFeatureToggle({
    feature: "addon",
    isFeatureActive: isAddonActive,
    isGlobal: isGlobal,
  });

  return (
    <div className={containerStyle}>
      <Button
        className={`${buttonGeneralStyle} ${
          addonHook.isActive ? activeStyle : inActiveStyle
        }`}
        onClick={addonHook.toggleFeature}
        variant="solid"
      >
        {addonLabel}
      </Button>
      <Button
        iconPosition="end"
        // active and inactive styles cover background and border
        // activeAi and ai style cover ai icon
        className={`${buttonGeneralStyle} ${
          chatbotHook.isActive ? activeStyle : inActiveStyle
        } ${chatbotHook.isActive ? "activeAi" : " ai"}`}
        onClick={chatbotHook.toggleFeature}
        variant="solid"
      >
        {<AI_Icon isActive={chatbotHook.isActive} />}
        {chatbotLabel}
      </Button>
    </div>
  );
};

export default ServiceButtons;
