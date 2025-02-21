import { Button, Drawer } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Form } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import HandleCancelClick from "./HandleCancelClick";
import useModal from "../hooks/useConfirmationModal";
import CancelSaveButton from "../../../components/CancelSaveButton";

const FaqForm = ({
  isDrawerOpen,
  setIsDrawerOpen,
}: {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isDrawerOpen: boolean) => void;
}) => {
  // reference to user inputs
  const question = useRef<HTMLInputElement>(null);
  const answer = useRef<HTMLTextAreaElement>(null);
  // modal state
  const [isModalVisible, setIsModalVisible] = useState(false);
  // useEffect to show modal when state updates
  useEffect(() => {
    if (isModalVisible) {
      console.log("Modal is now visible");
      (question.current?.value !== "" || answer.current?.value !== "") && (
        <HandleCancelClick
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
        />
      );
    }
  }, [isModalVisible]);

  return (
    <Drawer
      placement="bottom"
      height="85vh"
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
      closable={false} //to hide the default close Button
      className="rounded-t-rounded-12 flex"
    >
      {/* close button */}
      <Button
        icon={<CloseCircleOutlined />}
        iconPosition="end"
        className="absolute -top-12  right-4 z-20 bg-Neutral-PrimaryBackground rounded-rounded-6 font-bold cursor-pointer"
        onClick={() => {
          // if the user has inserted input, a confirmation modal will appear
          setIsModalVisible(true);
          setIsDrawerOpen(false);
        }}
      >
        بستن
      </Button>

      {/* drawer content */}
      <div className="flex flex-col h-full">
        {/* the title */}
        <p className="text-xl font-bold text-Text+Icon-01">
          ویرایش سوال متداول
        </p>
        {/* the form */}
        <Form method="POST" className="mt-4 flex-grow">
          <input
            placeholder="سوال"
            name="question"
            required
            ref={question}
            className="w-full mt-2 mb-2 p-3 border border-Text+Icon-04 focus:outline-none font-bold h-8 rounded-rounded-6"
          />
          <textarea
            placeholder="پاسخ"
            rows={8}
            name="answer"
            required
            ref={answer}
            className="w-full mt-2 mb-2 p-3 border border-Text+Icon-04 focus:outline-none font-bold rounded-rounded-6"
          />
        </Form>
        {/* save and cancel buttons */}
        {/* if the user has inserted input, a confirmation modal will appear */}
        {/* props of CancelSaveButton are not correct */}
        <CancelSaveButton
          whiteButtonLabel="لغو"
          redButtonLabel="ذخیره"
          onCancel={() => setIsModalVisible(true)}
          onSave={() => setIsModalVisible(true)}
        />
      </div>
    </Drawer>
  );
};

export default FaqForm;
