import { Modal } from "antd";
import CancelSaveButton from "./CancelSaveButton";

// to handle click on close or cancel buttons
const ConfirmationModal = ({
  title,
  confirmLabel,
  cancelLabel,
  isVisible,
  setIsVisible,
  onConfirm,
}: {
  title: string;
  confirmLabel: string;
  cancelLabel: string;
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  onConfirm?: () => void;
}) => {
  // styling purposes
  // const modalStyles = {
  //   container: {
  //     padding: 0,
  //   },
  //   footer: {
  //     borderTop: "1px solid #e1e6ef",
  //     backgroundColor: "#f8f9fc",
  //     width: "100%",
  //   },
  // };

  return (
    <Modal
      closable={false} // to remove default close button
      open={isVisible}
      className="bg-Neutral-White rounded-rounded-6"
      centered
      // set responsive width
      width={{
        xs: "90%",
        sm: "80%",
        md: "70%",
        lg: "60%",
        xl: "50%",
        xxl: "40%",
      }}
      zIndex={50}
      // styles={modalStyles}
      //props of CancelSaveButton are not correct
      footer={
        <CancelSaveButton
          whiteButtonLabel={cancelLabel}
          redButtonLabel={confirmLabel}
          onWhiteClick={() => setIsVisible(false)}
          onRedClick={() => setIsVisible(false)}
        />
      }
    >
      <p className="font-bold m-4 bg-Neutral-White">{title}</p>
    </Modal>
  );
};

export default ConfirmationModal;
