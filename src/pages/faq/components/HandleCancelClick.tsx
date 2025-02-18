import { Button, Modal } from "antd";
import { useState } from "react";
import { redBg, whiteBg } from "./FaqForm";

// to handle click on close or cancel buttons
const HandleCancelClick: React.FC = () => {
  // this state checks if the drawer (FaqForm to enter a new question) is open or not
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Modal
      title="آیا از حذف مطمئن هستید؟"
      closable={false} // to remove default close button
      footer={false} // to remove default footer buttons
      open={isModalOpen}
      className="bg-Neutral-White"
    >
      <div className="flex flex-row justify-between w-full z-40 rounded-rounded-4 border-t-Neutral-Line bg-Neutral-BaseBackground">
        <Button className={whiteBg} onClick={() => setIsModalOpen(false)}>
          انصراف
        </Button>
        <Button
          className={redBg}
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          حذف
        </Button>
      </div>
    </Modal>
  );
};

export default HandleCancelClick;
