import React from "react";
import GlobalButtons from "./GlobalButtons";
import UserInput from "./UserInput";

export interface ProductProps {
  name: string;
  id: number;
  price: number;
  description: string;
  addon: ProductProps[];
  imageSrc: string;
  // chatsHistory:
}

const Product: React.FC<ProductProps> = ({
  name,
  id,
  price,
  description,
  addon,
  imageSrc,
}) => {
  return (
    <div>
      <img src={imageSrc} className="w-full max-h-72" />

      <h1 className="text-Text+Icon-01 font-extrabold">{name}</h1>

      <div className="flex flex-col w-5/6 justify-self-center">
        <UserInput title="قیمت محصول" type="number" value={price} />
        <UserInput title="توضیحات محصول" type="textArea" value={description} />
        <UserInput title="تتظیمات محصولات مرتبط" type="addon" value={addon} />
        {/* <UserInput title="تاریخچه چت‌ها" type="textArea" value={} /> */}
      </div>

      <GlobalButtons addonTitle="محصولات مرتبط" chatbotTitle="چت هوشمند" />
    </div>
  );
};

export default Product;
