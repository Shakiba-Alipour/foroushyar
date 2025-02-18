import { Button, Drawer, Input, Modal } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Form } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";

const FaqForm = ({
  isDrawerOpen,
  setIsDrawerOpen,
}: {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isDrawerOpen: boolean) => void;
}) => {
  //   to save the answer
  const { TextArea } = Input;

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
        className="absolute -top-12  right-4 z-50 bg-Neutral-PrimaryBackground rounded-rounded-6 font-bold cursor-pointer"
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
            name="question"
            required
            className="w-full mt-2 mb-2 border-Text+Icon-04 font-bold"
          />
          <TextArea
            placeholder="پاسخ"
            rows={8}
            name="answer"
            required
            className="w-full mt-2 mb-2 border-Text+Icon-04 font-bold"
          />
        </Form>
        {/* save and cancel buttons */}
        <div className="w-full flex justify-between">
          <Button className="w-1/2 ml-2 font-bold bg-Neutral-White border-Danger-Background text-Danger-Default hover:text-Danger-Hover hover:border-Danger-Hover cursor-pointer">
            لغو
          </Button>
          <Button className="w-1/2 mr-2 font-bold text-Neutral-White bg-Primary-Default hover:bg-Primary-Hover cursor-pointer">
            ذخیره
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

export default FaqForm;
