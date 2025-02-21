import { useState } from "react";
import SearchArea from "../../../components/SearchArea";
import { Space, Switch, Table } from "antd";

// table content data type
interface DataType {
  key: React.ReactNode;
  imageSrc: string;
  name: string;
}

// rowSelection objects indicates the need for row selection
// const rowSelection: TableRowSelection<DataType> = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     console.log(
//       `selectedRowKeys: ${selectedRowKeys}`,
//       "selectedRows: ",
//       selectedRows
//     );
//   },
//   onSelect: (record, selected, selectedRows) => {
//     console.log(record, selected, selectedRows);
//   },
//   onSelectAll: (selected, selectedRows, changeRows) => {
//     console.log(selected, selectedRows, changeRows);
//   },
// };

const MessageContent = () => {
  const [checkStrictly, setCheckStrictly] = useState(false);

  // table columns
  const columns = [{ title: "آگهی", dataInndex: "products" }];

  return (
    <div>
      <h1 className="text-Text+Icon-01 text-lg">انتخاب آگهی</h1>
      <p className="text-Text+Icon-02">
        محصولاتی که می‌خواهید پیام در چت‌های قبلی آن‌ها ارسال شود را انتخاب
        کنید.
      </p>

      {/* the search */}
      <SearchArea />

      {/* the table of products */}
      {/* <> */}
      <Table<DataType>
        columns={columns}
        scroll={{ y: 5 * 30 }}
        bordered
        //   rowSelection={{ ...rowSelection, checkStrictly }}
      ></Table>
      {/* <Space align="center" style={{ marginBottom: 16 }}>
          CheckStrictly:{" "}
          <Switch checked={checkStrictly} onChange={setCheckStrictly} />
        </Space>
      </> */}
    </div>
  );
};

export default MessageContent;
