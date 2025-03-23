import { Input } from "antd";
import CancelSaveButton from "../../components/CancelSaveButton";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import { useRef } from "react";
import api from "../../api/auth";
import { authActions } from "../../store/authSlice";
import { TextAreaRef } from "antd/es/input/TextArea";

const CommandsPage = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useAppDispatch();

  // const [commands, setCommands] = useState(user?.description);
  let commands = user?.description;
  const input = useRef<TextAreaRef>(null);

  const saveClickHandler = async () => {
    try {
      // setCommands(input.current?.resizableTextArea?.textArea.value);
      commands = input.current?.resizableTextArea?.textArea.value ?? "";
      if (commands) {
        // to save commands in the database
        const COMMANDS_URL = process.env.REACT_APP_API_BASE_URL + "/panel/user";
        const response = await api.put(COMMANDS_URL, {
          ...user,
          description: commands,
        });

        if (response) {
          // to save commands in the store
          dispatch(authActions.update({ description: commands }));

          // to save commands in local storage
          localStorage.setItem("description", commands);

          window.location.reload();
        }
      }
    } catch (error) {
      console.log(" خطا در ثبت دستورات ربات" + error);
    }
  };

  const cancelClickHandler = () => {
    // setCommands(user?.description || "");
    commands = user?.description || "";
  };

  return (
    <div className="flex flex-col m-4 w-full lg:w-5/6 px-4 lg:px-0 py-8">
      <p className="text-lg font-bold mb-4 self-start text-Text+Icon-01">
        دستورات
      </p>
      <Input.TextArea
        placeholder="دستورات خود را بنویسید."
        autoSize={{ minRows: 5 }}
        className="mb-4"
        defaultValue={commands}
        ref={input}
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
