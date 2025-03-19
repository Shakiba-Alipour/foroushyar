import { useRef } from "react";
import { Form } from "react-router-dom";

const MessageContent = () => {
  const title = useRef<HTMLInputElement>(null);
  const content = useRef<HTMLTextAreaElement>(null);

  return (
    <div>
      <h1 className="text-Text+Icon-01 text-lg mt-4">محتوای ارسالی</h1>
      <p className="text-Text+Icon-02">
        متنی که می‌خواهید ارسال شود را بنویسید.
      </p>

      {/* the form */}
      <Form method="POST" className="mt-4 flex-grow">
        <input
          placeholder="عنوان"
          name="question"
          required
          ref={title}
          className="w-full mt-2 mb-2 p-3 border border-Text+Icon-04 focus:outline-noneh-8 rounded-rounded-6"
        />
        <textarea
          placeholder="محتوا"
          rows={8}
          name="answer"
          required
          ref={content}
          className="w-full mt-2 mb-2 p-3 border border-Text+Icon-04 focus:outline-none rounded-rounded-6"
        />
      </Form>
    </div>
  );
};

export default MessageContent;
