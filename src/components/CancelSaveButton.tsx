import { Button } from "antd";
import React from "react";

// cancel and save (previous and next) buttons are one of the most-frequently used components of the website
// they are implemented in this folder to be availabl globally

// defining the component props with function types
interface Props {
  whiteButtonLabel: string;
  redButtonLabel: string;
  onWhiteClick: () => void;
  onRedClick: () => void;
}

const CancelSaveButton: React.FC<Props> = ({
  whiteButtonLabel,
  redButtonLabel,
  onWhiteClick,
  onRedClick,
}) => {
  const whiteBg =
    "w-1/2 ml-2 font-bold bg-Neutral-White border-Danger-Background text-Danger-Default hover:text-Danger-Hover hover:border-Danger-Hover cursor-pointer";
  const redBg =
    "w-1/2 mr-2 font-bold text-Neutral-White bg-Primary-Default hover:bg-Primary-Hover cursor-pointer";

  return (
    <div className="w-full flex justify-between">
      <Button className={whiteBg} onClick={onWhiteClick}>
        {whiteButtonLabel}
      </Button>
      <Button className={redBg} onClick={onRedClick}>
        {redButtonLabel}
      </Button>
    </div>
  );
};

export default CancelSaveButton;
