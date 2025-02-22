import { Modal } from "antd";
import { useState } from "react";
import CancelSaveButton from "../../../components/CancelSaveButton";

// to handle click on close or cancel buttons
const HandleCancelClick = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) => {
  function setIsModalVisible(arg0: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <Modal
      title="آیا از حذف مطمئن هستید؟"
      closable={false} // to remove default close button
      footer={false} // to remove default footer buttons
      open={isVisible}
      className="bg-Neutral-White"
    >
      <div className="flex flex-row justify-between w-full z-40 rounded-rounded-4 border-t-Neutral-Line bg-Neutral-BaseBackground">
        {/* props of CancelSaveButton are not correct */}
        <CancelSaveButton
          whiteButtonLabel="لغو"
          redButtonLabel="ذخیره"
          onWhiteClick={() => setIsModalVisible(true)}
          onRedClick={() => setIsModalVisible(true)}
        />
      </div>
    </Modal>
  );
};

export default HandleCancelClick;
