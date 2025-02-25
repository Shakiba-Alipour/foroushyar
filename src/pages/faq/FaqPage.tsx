import { List } from "antd";
import Edit_Icon from "../../assets/Edit_Icon";
import NewQuestion from "./components/NewQuestion";
import { useState } from "react";
import DisplayLoadedFaq from "./components/DisplayLoadedFaq";

const FaqPage = () => {
  // this state checks if the drawer (FaqForm to enter a new question) is open or not
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    // flex-grow pushes the menu to the bottom if there's not enough content
    <div className="flex-grow flex-col">
      <h1 className="text-lg font-bold m-4 text-Text+Icon-01">سوالات متداول</h1>

      {/* to display the table of faqs */}
      <DisplayLoadedFaq
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />

      {/* to add a new question */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="relative top-64 w-11/12 h-10 flex items-center justify-center justify-self-center bg-Primary-Default text-Neutral-White rounded-rounded-6 hover:bg-Primary-Hover"
      >
        افزودن ＋
      </button>
      {isDrawerOpen && (
        <NewQuestion
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        />
      )}
    </div>
  );
};

export default FaqPage;
