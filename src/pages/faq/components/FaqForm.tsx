import { Button, Drawer } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Form } from "react-router-dom";
import { useRef } from "react";
import HandleCancelClick from "./HandleCancelClick";

// buttons
export const whiteBg =
  "w-1/2 ml-2 font-bold bg-Neutral-White border-Danger-Background text-Danger-Default hover:text-Danger-Hover hover:border-Danger-Hover cursor-pointer";
export const redBg =
  "w-1/2 mr-2 font-bold text-Neutral-White bg-Primary-Default hover:bg-Primary-Hover cursor-pointer";

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
          if (question.current?.value.trim() || answer.current?.value.trim()) {
            <HandleCancelClick />;
          }
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
            className="w-full mt-2 mb-2 p-3 border-Text+Icon-02 font-bold h-8 rounded-rounded-6"
          />
          <textarea
            placeholder="پاسخ"
            rows={8}
            name="answer"
            required
            ref={answer}
            className="w-full mt-2 mb-2 p-3 border-Text+Icon-04 font-bold rounded-rounded-6"
          />
        </Form>
        {/* save and cancel buttons */}
        <div className="w-full flex justify-between">
          <Button
            className={whiteBg}
            onClick={() => {
              // if the user has inserted input, a confirmation modal will appear
              if (
                question.current?.value !== "" ||
                answer.current?.value !== ""
              ) {
                <HandleCancelClick />;
              }
              setIsDrawerOpen(false);
            }}
          >
            لغو
          </Button>
          <Button className={redBg}>ذخیره</Button>
        </div>
      </div>
    </Drawer>
  );
};

export default FaqForm;
