import { Button } from "antd";
import React from "react";

// cancel and save buttons are one of the most-frequently used components of the website
// they are implemented in this folder to be availabl globally

// defining the component props with function types
interface Props {
  whiteButtonLabel: string;
  redButtonLabel: string;
  onCancel: () => void;
  onSave: () => void;
}

const CancelSaveButton: React.FC<Props> = ({
  whiteButtonLabel,
  redButtonLabel,
  onCancel,
  onSave,
}) => {
  const whiteBg =
    "w-1/2 ml-2 font-bold bg-Neutral-White border-Danger-Background text-Danger-Default hover:text-Danger-Hover hover:border-Danger-Hover cursor-pointer";
  const redBg =
    "w-1/2 mr-2 font-bold text-Neutral-White bg-Primary-Default hover:bg-Primary-Hover cursor-pointer";

  return (
    <div className="w-full flex justify-between">
      <Button className={whiteBg} onClick={onCancel}>
        {whiteButtonLabel}
      </Button>
      <Button className={redBg} onClick={onSave}>
        {redButtonLabel}
      </Button>
    </div>
  );
};

export default CancelSaveButton;
