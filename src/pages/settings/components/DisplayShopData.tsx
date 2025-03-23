import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import Field from "./Field";

const DisplayShopData = ({
  onUpdate,
}: {
  onUpdate: (id: string, value: string | number) => void;
}) => {
  // to get the data from redux
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div>
      <Field
        title="نام فروشگاه"
        id="shop_name"
        type="string"
        placeholder="فروش‌یار"
        data={user?.shop_name || ""}
        onChange={onUpdate}
      />
      <Field
        title="آدرس"
        id="address"
        type="string"
        placeholder="تهران - خیابان 16 آذر - ..."
        data={user?.address || ""}
        onChange={onUpdate}
      />
      <Field
        title="پیام خوش‌آمدگویی"
        id="welcome_message"
        type="textarea"
        placeholder="متن نوشته‌شده در شروع هر گفتگو برای مشتریان ارسال می‌شود."
        data={user?.welcome_message || ""}
        onChange={onUpdate}
      />
      <Field
        title="شماره تلفن"
        id="phone_panel"
        type="number"
        placeholder="09120000000"
        data={user?.phone_panel || ""}
        hasSwitch
        switchLabel="ارسال شماره تلفن"
        onChange={onUpdate}
      />
      <Field
        title="آیدی اینستاگرام"
        id="instagram_id"
        type="string"
        placeholder="foroush_yar@"
        data={user?.instagram_id || ""}
        hasSwitch
        switchLabel="ارسال صفحات مجازی"
        onChange={onUpdate}
      />
      <Field
        title="آدرس وبسایت"
        id="website_url"
        type="string"
        placeholder="https://atenatech.ir"
        data={user?.website_url || ""}
        onChange={onUpdate}
      />
    </div>
  );
};

export default DisplayShopData;
