import { useState } from "react";

interface ToggleProps {
  productId?: string; //If the feature is set for a single product, its id must be stored
  feature: "chatbot" | "addon";
  isFeatureActive: boolean;
  isGlobal?: boolean; // Whether the feature related to all products or just a single one
}

const useFeatureToggle = ({
  productId,
  feature,
  isFeatureActive,
  isGlobal,
}: ToggleProps) => {
  const [isActive, setIsActive] = useState(isFeatureActive);

  const toggleFeature = async () => {
    setIsActive((prevState) => !prevState);

    //try-catch to send new state to the API
  };

  return { isActive, toggleFeature };
};

export default useFeatureToggle;
