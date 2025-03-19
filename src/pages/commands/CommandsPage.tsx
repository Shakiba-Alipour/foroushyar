import { Input } from "antd";
import CancelSaveButton from "../../components/CancelSaveButton";

const CommandsPage = () => {
  const saveClickHandler = () => {};

  const cancelClickHandler = () => {};

  return (
    <div className="flex flex-col m-4 w-full lg:w-5/6 px-4 lg:px-0 py-8">
      <p className="text-lg font-bold mb-4 self-start text-Text+Icon-01">
        دستورات
      </p>
      <Input.TextArea
        placeholder="دستورات خود را بنویسید."
        autoSize={{ minRows: 5 }}
        className="mb-4"
      />

      <CancelSaveButton
        redButtonLabel="ذخیره"
        whiteButtonLabel="انصراف"
        onRedClick={saveClickHandler}
        onWhiteClick={cancelClickHandler}
      />
    </div>
  );
};

export default CommandsPage;
