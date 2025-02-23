import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { ProductProps } from "./Product";
import Edit_Icon from "../../../assets/Edit_Icon";
import DescriptionForm from "./DescriptionForm";
import { useState } from "react";
import AddonList from "./AddonList";
import PriceForm from "./PriceForm";

// the form that conrains product detail and is editable
interface UserInputProps {
  title: string;
  type: "number" | "textArea" | "addon";
  value: number | string | ProductProps[];
}

const UserInput: React.FC<UserInputProps> = ({ title, type, value }) => {
  // this state holds the status of the editing drawer (addon, price, and description drawers)
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);

  const element = (
    <div className="flex flex-row w-full justify-between mt-4">
      <h2 className="text-Text+Icon-00 font-semibold">{title}</h2>
      <div
        className="flex flex-row w-fit cursor-pointer"
        onClick={() => setIsEditDrawerOpen(true)}
      >
        <p className="text-Primary-Default">ویرایش</p>
        <Edit_Icon />
      </div>
    </div>
  );

  // To handle clicking on edit buttons
  if (isEditDrawerOpen) {
    switch (type) {
      case "number":
        return (
          <PriceForm
            isDrawerOpen={isEditDrawerOpen}
            setIsDrawerOpen={setIsEditDrawerOpen}
          />
        );

      case "textArea":
        return (
          <DescriptionForm
            isDrawerOpen={isEditDrawerOpen}
            setIsDrawerOpen={setIsEditDrawerOpen}
          />
        );

      case "addon":
        return (
          <AddonList
            isDrawerOpen={isEditDrawerOpen}
            setIsDrawerOpen={setIsEditDrawerOpen}
          />
        );
    }
  }

  // To display product details
  let input;
  const className =
    "w-full mt-2 mb-4 text-Text+Icon-01 bg-Neutral-BaseBackground rounded-rounded-6 border-none justify-center";

  if (type === "number" && typeof value === "number") {
    input = <Input className={className} suffix="تومان" value={value} />;
  } else if (type === "textArea" && typeof value === "string") {
    input = <TextArea className={className} value={value} />;
  } else if (type === "addon" && Array.isArray(value)) {
    const className =
      "text-Text+Icon-01 font-light text-sm p-3 bg-Neutral-BaseBackground rounded-rounded-6  mt-2 mb-4";
    input =
      value.length > 0 ? (
        <div className={className}>
          {value.map((addon) => addon.name).join("، ")}
        </div>
      ) : (
        <p className={className}>محصول مرتبطی وجود نداره!</p>
      );
  }

  return (
    <>
      {element}
      {input}
    </>
  );
};

export default UserInput;
