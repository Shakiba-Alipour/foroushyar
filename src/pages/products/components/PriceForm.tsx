import { Button, Drawer, Input, InputRef } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Form } from "react-router-dom";
import { useRef } from "react";
import CancelSaveButton from "../../../components/CancelSaveButton";

const PriceForm = ({
  isDrawerOpen,
  setIsDrawerOpen,
}: {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isDrawerOpen: boolean) => void;
}) => {
  // reference to user input
  const price = useRef<InputRef>(null);

  // to update product price
  const updatePriceHandler = (value: string) => {};

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
      <div className="flex-grow flex-col h-full">
        {/* the title */}
        <p className="text-xl font-bold text-Text+Icon-01">قیمت محصول</p>
        {/* the form */}
        <Form method="POST" className="mt-4 flex-grow">
          <Input
            name="price"
            required
            suffix="تومان"
            type="number"
            ref={price}
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

export default PriceForm;
