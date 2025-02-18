import { Input, Modal } from "antd";
import { useState } from "react";
import { Form } from "react-router-dom";

const FaqForm = ({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}) => {
  //   to save the answer
  const { TextArea } = Input;

  return (
    <Modal
      title="ویرایش سوال متداول"
      className="w-full"
      open={isModalOpen}
      //   onOk={() => handleSubmission()}
      onCancel={() => setIsModalOpen(false)}
    >
      <Form method="POST">
        <Input placeholder="سوال" name="question" required className="w-full" />
        <TextArea rows={8} name="answer" required className="w-full" />
      </Form>
    </Modal>
  );
};

export default FaqForm;
