import { Input, Modal } from "antd";
import { useState } from "react";
import { Form } from "react-router-dom";

const FaqForm = () => {
  const [isOpen, setIsOpen] = useState(true);
  //   to save the answer
  const { TextArea } = Input;

  return (
    <Modal
      title="ویرایش سوال متداول"
      className="w-full"
      open={isOpen}
      //   onOk={() => handleSubmission()}
      onCancel={() => setIsOpen(false)}
    >
      <Form method="POST">
        <Input placeholder="سوال" name="question" required />
        <TextArea rows={8} name="answer" required />
      </Form>
    </Modal>
  );
};

export default FaqForm;
