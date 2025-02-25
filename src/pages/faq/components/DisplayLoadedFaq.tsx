import { Table } from "antd";
import Edit_Icon from "../../../assets/Edit_Icon";
import { useLoaderData } from "react-router-dom";
import Delete_Icon from "../../../assets/Delete_Icon";
import NewQuestion from "./NewQuestion";

const dataSource = [
  { key: 1, question: "چگونه می‌توانم محصول را در دیوار خریداری کنم؟" },
  { key: 2, question: "چگونه می‌توانم محصول را در دیوار خریداری کنم؟" },
];

const DisplayLoadedFaq = ({
  isDrawerOpen,
  setIsDrawerOpen,
}: {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isDrawerOpen: boolean) => void;
}) => {
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
          <Edit_Icon
            onClick={() => {
              // setIsDrawerOpen(true);
              <NewQuestion
                isDrawerOpen={isDrawerOpen}
                setIsDrawerOpen={setIsDrawerOpen}
              />;
            }}
          />
          <Delete_Icon />
        </div>
      ),
      width: 90,
    },
  ];

  // To load the data
  const data = useLoaderData();

  // if no questions had been entered before
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <p className="text-Neutral-LineDark flex justify-center m-4 align-middle">
        هیچ سوالی وجود ندارد
      </p>
    );
  }

  //   if a list of questions is available
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={false}
      bordered
      className="w-11/12 flex justify-self-center"
    />
  );
};

// to load questions
export async function loader() {}

export default DisplayLoadedFaq;
