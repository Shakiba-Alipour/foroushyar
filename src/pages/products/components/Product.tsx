import React from "react";
import GlobalButtons from "./GlobalButtons";
import Edit_Icon from "../../../assets/Edit_Icon";
import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";

interface ProductProps {
  name: string;
  id: number;
  price: number;
  description: string;
  addonSetting: (typeof Product)[];
  imageSrc: string;
  // chatsHistory:
}

const Product: React.FC<ProductProps> = ({
  name,
  id,
  price,
  description,
  addonSetting,
  imageSrc,
}) => {
  return (
    <div>
      <img src={imageSrc} className="w-full max-h-72" />

      <h1 className="text-Text+Icon-01">name</h1>

      <div className="flex flex-col w-5/6">
        <div className="flex flex-row w-full justify-between">
          <h2 className="text-Text+Icon-00">قیمت محصول</h2>
          <div className="flex flex-row w-fit">
            <p className="text-Primary-Default">ویرایش</p>
            <Edit_Icon />
          </div>
        </div>
        <UserInput title="قیمت" type="input" value="" />
      </div>

      <GlobalButtons addonTitle="محصولات مرتبط" chatbotTitle="چت هوشمند" />
    </div>
  );
};

// the form that conrains product detail and is editable
interface UserInputProps {
  title: string;
  type: "input" | "textArea" | "addon" | "chatbot";
  value: string | (typeof Product)[];
}

const UserInput: React.FC<UserInputProps> = ({ title, type, value }) => {
  const element = (
    <>
      <h2 className="text-Text+Icon-00">{title}</h2>
      <div className="flex flex-row w-fit">
        <p className="text-Primary-Default">ویرایش</p>
        <Edit_Icon />
      </div>
    </>
  );

  let input;
  const className = "w-full";

  if (type === "input") {
    input = <Input className={className} />;
  } else if (type === "textArea") {
    input = <TextArea className={className} />;
  } else if (type === "addon") {
  } else {
  }

  return (
    <>
      {element}
      {input}
    </>
  );
};

export default Product;
