import { useRef } from "react";
import { Form } from "react-router-dom";
import CancelSaveButton from "../../../components/CancelSaveButton";

const MessageContent = () => {
  const title = useRef<HTMLInputElement>(null);
  const content = useRef<HTMLTextAreaElement>(null);

  return (
    <div>
      <h1 className="text-Text+Icon-01">محتوای ارسالی</h1>
      <p className="text-Text+Icon-02">
        متنی که می‌خواهید ارسال شود را بنویسید
      </p>

      {/* the form */}
      <Form method="POST" className="mt-4 flex-grow">
        <input
          placeholder="عنوان"
          name="question"
          required
          ref={title}
          className="w-full mt-2 mb-2 p-3 border border-Text+Icon-04 focus:outline-none font-bold h-8 rounded-rounded-6"
        />
        <textarea
          placeholder="محتوا"
          rows={8}
          name="answer"
          required
          ref={content}
          className="w-full mt-2 mb-2 p-3 border border-Text+Icon-04 focus:outline-none font-bold rounded-rounded-6"
        />
      </Form>

      {/* buttons */}
      <CancelSaveButton
        whiteButtonLabel="قبلی"
        redButtonLabel="بعدی"
        onCancel={() => {}}
        onSave={() => {}}
      />
    </div>
  );
};

export default MessageContent;
