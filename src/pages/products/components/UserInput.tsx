import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { ProductProps } from "./Product";
import Edit_Icon from "../../../assets/Edit_Icon";

// the form that conrains product detail and is editable
interface UserInputProps {
  title: string;
  type: "number" | "textArea" | "addon";
  value: number | string | ProductProps[];
}

const UserInput: React.FC<UserInputProps> = ({ title, type, value }) => {
  const element = (
    <div className="flex flex-row w-full justify-between mt-4">
      <h2 className="text-Text+Icon-00 font-semibold">{title}</h2>
      <div className="flex flex-row w-fit">
        <p className="text-Primary-Default">ویرایش</p>
        <Edit_Icon />
      </div>
    </div>
  );

  let input;
  const className = "w-full mt-2 mb-4";

  if (type === "number" && typeof value === "number") {
    input = <Input className={className} suffix="تومان" value={value} />;
  } else if (type === "textArea" && typeof value === "string") {
    input = <TextArea className={className} value={value} />;
  } else if (type === "addon" && Array.isArray(value)) {
    const className = "text-Text+Icon-01 font-light text-sm";
    input =
      value.length > 0 ? (
        <p className={className}>
          {value.map((addon) => addon.name).join("، ")}
        </p>
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
