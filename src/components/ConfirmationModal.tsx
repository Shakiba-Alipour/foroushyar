import { Modal } from "antd";
import { useState } from "react";
import CancelSaveButton from "./CancelSaveButton";

// to handle click on close or cancel buttons
const ConfirmationModal = ({
  title,
  confirmLabel,
  cancelLabel,
  isVisible,
  setIsVisible,
  onConfirm,
  onCancel,
}: {
  title: string;
  confirmLabel: string;
  cancelLabel: string;
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  onConfirm: () => void;
  onCancel: () => void;
}) => {
  return (
    <Modal
      title={title}
      closable={false} // to remove default close button
      // footer={false} // to remove default footer buttons
      open={isVisible}
      className="bg-Neutral-White"
      cancelText={cancelLabel}
      okText={confirmLabel}
      centered
      confirmLoading //apply loading visual effect for confirm button
      destroyOnClose //unmount child components on onClose
      width={90}
      zIndex={50}
      onCancel={onCancel}
      onOk={onConfirm}
      cancelButtonProps={{
        className:
          "w-1/2 ml-2 font-bold bg-Neutral-White border-Danger-Background text-Danger-Default hover:text-Danger-Hover hover:border-Danger-Hover cursor-pointer",
      }}
      okButtonProps={{
        className:
          "w-1/2 mr-2 font-bold text-Neutral-White bg-Primary-Default hover:bg-Primary-Hover cursor-pointer",
      }}
    >
      {/* props of CancelSaveButton are not correct */}
      {/* <CancelSaveButton
        whiteButtonLabel={cancelLabel}
        redButtonLabel={confirmLabel}
        onWhiteClick={() => setIsVisible(true)}
        onRedClick={() => setIsVisible(true)}
      /> */}
    </Modal>
  );
};

export default ConfirmationModal;
