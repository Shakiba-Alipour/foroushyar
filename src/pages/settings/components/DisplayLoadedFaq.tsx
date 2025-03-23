import { Table } from "antd";
import Edit_Icon from "../../../assets/Edit_Icon";
import { useLoaderData } from "react-router-dom";
import Delete_Icon from "../../../assets/Delete_Icon";
import NewQuestion from "./NewQuestion";
import ConfirmationModal from "../../../components/ConfirmationModal";
import { useState } from "react";
import api from "../../../api/auth";

const DisplayLoadedFaq = ({
  isDrawerOpen,
  setIsDrawerOpen,
}: {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isDrawerOpen: boolean) => void;
}) => {
  const [isConfirmationModalVisible, setIsConfirmationModalVisible] =
    useState(false);

  // the columns configuration
  const columns = [
    {
      title: "سوال متداول",
      dataIndex: "question",
      key: "question",
      ellipsis: true, // to show ... for long text
    },
    {
      title: "عملیات",
      key: "actions",
      render: () => (
        <div className="flex flex-row justify-around cursor-pointer">
          <Edit_Icon onClick={() => setIsDrawerOpen(true)} />
          <Delete_Icon onClick={() => setIsConfirmationModalVisible(true)} />
        </div>
      ),
      width: 90,
    },
  ];

  // To load the data
  const dataSource = useLoaderData();

  //   if a list of questions is available
  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        bordered
        className="w-3/4 flexjustify-self-center self-center"
      />

      {isDrawerOpen && (
        <NewQuestion
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        />
      )}

      {isConfirmationModalVisible && (
        <ConfirmationModal
          title="آیا از حذف مطمئن هستید؟"
          confirmLabel="حذف"
          cancelLabel="انصراف"
          isVisible={isConfirmationModalVisible}
          setIsVisible={setIsConfirmationModalVisible}
        />
      )}
    </>
  );
};

// to load questions
export async function faqLoader() {
  const FAQ_BASE_URL = process.env.REACT_APP_API_BASE_URL + "/panel/faq/user";
  const response = await api.get(FAQ_BASE_URL);
  if (response) {
    let dataSource = [];

    response.data.data.map(
      ({
        faq_id,
        question,
        answer,
      }: {
        faq_id: number;
        question: string;
        answer: string;
      }) => {
        dataSource.push({ key: faq_id, question: question, answer: answer });
      }
    );
  }
}

export default DisplayLoadedFaq;
