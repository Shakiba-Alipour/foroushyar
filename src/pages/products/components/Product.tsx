import React from "react";
import GlobalButtons from "./GlobalButtons";
import UserInput from "./UserInput";
import { Carousel } from "antd";

export interface ProductProps {
  name: string;
  id: number;
  price: number;
  description: string;
  addon: ProductProps[];
  imagePaths: string | string[];
  // chatsHistory:
}

const Product: React.FC<ProductProps> = ({
  name,
  id,
  price,
  description,
  addon,
  imagePaths,
}) => {
  return (
    <div>
      {typeof imagePaths === "string" && (
        <img src={imagePaths[0]} className="w-full max-h-72" alt={name} />
      )}
      {Array.isArray(imagePaths) && (
        <Carousel adaptiveHeight dots>
          {imagePaths.map((path) => (
            <img src={path} className="w-full" alt={name} />
          ))}
        </Carousel>
      )}

      <h1 className="text-Text+Icon-01 font-extrabold">{name}</h1>

      <div className="flex flex-col w-5/6 justify-self-center">
        <UserInput title="قیمت محصول" type="number" value={price} />
        <UserInput title="توضیحات محصول" type="textArea" value={description} />
        <UserInput title="تنظیمات محصولات مرتبط" type="addon" value={addon} />
        {/* <UserInput title="تاریخچه چت‌ها" type="textArea" value={} /> */}
      </div>

      <GlobalButtons addonTitle="محصولات مرتبط" chatbotTitle="چت هوشمند" />
    </div>
  );
};

export default Product;
