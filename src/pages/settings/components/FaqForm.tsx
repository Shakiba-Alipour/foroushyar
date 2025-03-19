import { Button, Drawer, Input, InputRef } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Form } from "react-router-dom";
import { useRef } from "react";
import CancelSaveButton from "../../../components/CancelSaveButton";
import TextArea, { TextAreaRef } from "antd/es/input/TextArea";

const FaqForm = ({
  isDrawerOpen,
  setIsDrawerOpen,
  loadedQuestion,
  loadedAnswer,
}: {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isDrawerOpen: boolean) => void;
  loadedQuestion?: string;
  loadedAnswer?: string;
}) => {
  // reference to user inputs
  const question = useRef<InputRef>(null);
  const answer = useRef<TextAreaRef>(null);

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
        onClick={() => setIsDrawerOpen(false)}
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
          <Input
            placeholder="سوال"
            defaultValue={loadedQuestion}
            name="question"
            required
            ref={question}
            className="w-full mt-2 mb-2 p-3 border border-Text+Icon-04 focus:outline-none font-bold h-8 rounded-rounded-6"
          />
          <TextArea
            placeholder="پاسخ"
            defaultValue={loadedAnswer}
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
          onWhiteClick={() => setIsDrawerOpen(false)}
          onRedClick={() => {}}
        />
      </div>
    </Drawer>
  );
};

// to save the entered data to the backend
export function action() {}

export default FaqForm;
