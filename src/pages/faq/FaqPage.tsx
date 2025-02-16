import { List } from "antd";
import Edit_Icon from "../../assets/Edit_Icon";
import NewQuestion from "./components/NewQuestion";

const FaqPage = () => {
  // when the user clicks on the new question button
  const handleNewQuestionClick = () => {
    return <NewQuestion />;
  };

  return (
    // flex-grow pushes the menu to the bottom if there's not enough content
    <div className="flex-col flex-grow">
      <p className="font-Text+Icon-01 font-bold m-4 text-Text+Icon-01">
        سوالات متداول
      </p>

      <DisplayLoadedQuestions loadedQuestions={[]} />

      {/* to add a new question */}
      <button
        onClick={handleNewQuestionClick}
        className="relative top-64 w-11/12 h-10 flex items-center justify-center justify-self-center bg-Primary-Default text-Neutral-White rounded-rounded-6 hover:bg-Primary-Hover"
      >
        افزودن ＋
      </button>
    </div>
  );
};

// to load questions
export async function loader() {}

// to display the faq
const DisplayLoadedQuestions: React.FC<{
  loadedQuestions: { question: string; answer: string }[];
}> = ({ loadedQuestions }) => {
  // if no questions had been entered before
  if (!Array.isArray(loadedQuestions) || loadedQuestions.length === 0) {
    return (
      <p className="text-gray-500 font-iranYekan flex justify-center m-4 align-middle">
        هیچ سوالی وجود ندارد
      </p>
    );
  }

  //   if a list of questions is available
  return (
    <List
      header={
        <div className="flex justify-between font-iranYekan">
          <p>سوال متداول</p>
          <p>عملیات</p>
        </div>
      }
      bordered
      dataSource={loadedQuestions}
      renderItem={(item) => (
        <List.Item className=" flex flex-row justify-between">
          <p>{item.question}</p>
          <Edit_Icon />
        </List.Item>
      )}
    />
  );
};

export default FaqPage;
