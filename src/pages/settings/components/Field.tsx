// each field in settings page

import { Input, Switch } from "antd";
import { useState } from "react";

interface FieldProps {
  title: string;
  id: string;
  type: "number" | "string" | "textarea";
  data: number | string;
  placeholder: string;
  hasSwitch?: boolean;
  switchLabel?: string;
  onChange: (id: string, value: number | string) => void;
}

const Field: React.FC<FieldProps> = ({
  title,
  id,
  type,
  data,
  placeholder,
  hasSwitch,
  switchLabel,
  onChange,
}) => {
  // to handle switch changes
  const switchChangeHandler = () => {};

  // to handle input changes
  // const [value, setValue] = useState<string | number>(data);
  const inputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // setValue(newValue);
    onChange(id, e.target.value);
  };

  const isTextarea = type === "textarea";
  const className = "w-3/4 self-center";
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-center justify-between w-3/4 self-center">
        <p className="font-bold m-4 text-Text+Icon-01">{title}</p>
        {hasSwitch && (
          <div className="w-fit flex flex-row">
            <p className="text-Text+Icon-01 ml-3">{switchLabel}</p>
            <Switch onChange={switchChangeHandler} />
          </div>
        )}
      </div>
      {!isTextarea && (
        <Input
          type={type}
          defaultValue={data}
          placeholder={placeholder}
          className={className}
          onChange={inputChangeHandler}
        />
      )}
      {isTextarea && (
        <Input.TextArea
          defaultValue={data}
          placeholder={placeholder}
          className={className}
          autoSize={{ minRows: 3, maxRows: 6 }}
          onChange={inputChangeHandler}
        />
      )}
    </div>
  );
};

export default Field;
