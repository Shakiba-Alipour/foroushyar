import { Button, Drawer, Input, InputRef } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Form } from "react-router-dom";
import { useRef } from "react";
import CancelSaveButton from "../../../components/CancelSaveButton";
import api from "../../../api/auth";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../../../store/store";
import { authActions } from "../../../store/authSlice";

const PriceForm = ({
  isDrawerOpen,
  setIsDrawerOpen,
  defaultValue,
}: {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isDrawerOpen: boolean) => void;
  defaultValue: string;
}) => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const dispatch = useAppDispatch();

  // reference to user input
  const price = useRef<InputRef>(null);

  // to update product price
  const updatePriceHandler = async (value: string) => {
    const BASE_URL = process.env.REACT_APP_API_BASE_URL + "/panel/user";
    try {
      // to save in the database
      const response = await api.put(BASE_URL, { phone_panel: value });
      if (response.data) {
        // to save in the store
        dispatch(authActions.update({ phone_panel: value }));

        // to save in the local storage
        localStorage.setItem("phone_panel", value);
      }
    } catch (error) {
      console.log("خطا در ثبت قیمت محصول " + error);
    }
  };

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
        <Form className="mt-4 flex-grow">
          <Input
            name="price"
            required
            suffix="تومان"
            type="number"
            ref={price}
            defaultValue={Number(defaultValue)}
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
          onRedClick={() =>
            updatePriceHandler(price.current?.input?.value ?? defaultValue)
          }
        />
      </div>
    </Drawer>
  );
};

export default PriceForm;
