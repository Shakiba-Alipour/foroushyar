import { Progress } from "antd";
import CancelSaveButton from "../../components/CancelSaveButton";
import ProductSelection from "./components/ProductSelection";
import { useState } from "react";
import MessageContent from "./components/MessageContent";

const BulkMessagingPage = () => {
  const [step, setStep] = useState(25);
  return (
    <div className="flex-grow flex-col m-4">
      <Progress
        strokeColor="#f52d2d"
        showInfo={false}
        percent={step}
        strokeLinecap="round"
        trailColor="#e1e6ef"
      />
      <MessageContent />
      {/* buttons */}
      <CancelSaveButton
        whiteButtonLabel="قبلی"
        redButtonLabel="بعدی"
        onCancel={() => {}}
        onSave={() => {}}
      />
    </div>
  );
};

export default BulkMessagingPage;
