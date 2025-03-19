import { Button, Drawer } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Form } from "react-router-dom";
import { useRef } from "react";
import CancelSaveButton from "../../../components/CancelSaveButton";
import Searchbar from "../../../components/Searchbar";

const AddonList = ({
  isDrawerOpen,
  setIsDrawerOpen,
}: {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isDrawerOpen: boolean) => void;
}) => {
  // reference to user input
  const description = useRef<HTMLTextAreaElement>(null);

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
          تنظیمات محصولات مرتبط
        </p>
        {/* the search bar */}
        <Searchbar />

        {/* table of products */}

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

export default AddonList;
