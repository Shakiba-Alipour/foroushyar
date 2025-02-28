import { Table } from "antd";

// To define datatype for the table
interface DataType {
  name: string;
  imageSrc: string;
}

const FinalCheck = ({
  title,
  content,
  products,
}: {
  title: string;
  content: string;
  products: { productName: string; imageSrc: string }[];
}) => {
  // table column
  const column = [{ title: "آگهی", dataInndex: "products" }];

  return (
    <div>
      <div>
        <h1 className="text-Text+Icon-01 text-lg mt-4">بررسی نهایی</h1>
        <p className="text-Text+Icon-02">
          لطفا دقت کنید که اشکالی در محتوا و پست‌های انتخاب‌شده وجود نداشته
          باشد.
        </p>
      </div>
      <p className="font-bold text-Text+Icon-00 mt-4 mb-3">محتوای ارسالی</p>
      <div className="bg-Neutral-BaseBackground rounded-rounded-8 p-3 text-sm text-Text+Icon-01">
        <p>{title}</p>
        {/* a horizontal line between the title and content */}
        <hr className="border-Neutral-Line mt-2 mb-2" />
        <p>{content}</p>
      </div>
      <p className="font-bold text-Text+Icon-00 mt-4 mb-3">
        آگهی‌های انتخاب‌شده
      </p>
      <Table<DataType>
        columns={column}
        scroll={{ y: window.innerHeight * 0.6 }}
        bordered
        size="middle"
      />
    </div>
  );
};

export default FinalCheck;
