import NewQuestion from "./NewQuestion";
import { useState } from "react";
import DisplayLoadedFaq from "./DisplayLoadedFaq";

const FaqField = () => {
  // this state checks if the drawer (FaqForm to enter a new question) is open or not
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    // flex-grow pushes the menu to the bottom if there's not enough content
    <div className="flex flex-grow flex-col">
      <h1 className="font-bold m-4 text-Text+Icon-01 w-3/4 self-center">
        سوالات متداول
      </h1>

      {/* to display the table of faqs */}
      <DisplayLoadedFaq
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />

      {/* to add a new question */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="w-3/4 h-10 mt-2 mb-20 self-center items-center justify-center justify-self-center bg-Primary-Default text-Neutral-White rounded-rounded-6 hover:bg-Primary-Hover"
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

export default FaqField;
