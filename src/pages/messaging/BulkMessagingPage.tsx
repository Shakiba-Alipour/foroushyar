import { Progress } from "antd";
import CancelSaveButton from "../../components/CancelSaveButton";
import ProductSelection from "./components/ProductSelection";
import { useState } from "react";
import MessageContent from "./components/MessageContent";
import FinalCheck from "./components/FinalCheck";
import Notification from "../../components/Notification";

const BulkMessagingPage = () => {
  const [step, setStep] = useState(25);

  // To handle click on prev button
  const PrevClickHandler = (prevStep: number) => {
    if (prevStep - 25 < 25) {
      // throw new Error("مرحله قبلی وجود ندارد");
      <Notification text="مرحله قبلی وجود ندارد" isSuccessful={false} />;
      return;
    }
    setStep(prevStep - 25);
  };

  // To handle click on next button
  const NextClickHandler = (prevStep: number) => {
    if (prevStep + 25 > 100) {
      throw new Error("مرحله بعدی وجود ندارد");
    }
    setStep(prevStep + 25);
  };

  return (
    <div className="flex flex-col m-4">
      <Progress
        strokeColor="#f52d2d"
        showInfo={false}
        percent={step}
        strokeLinecap="round"
        trailColor="#e1e6ef"
      />

      {/* page content */}
      {step === 25 && <MessageContent />}
      {step === 50 && <ProductSelection />}
      {step === 75 && (
        <FinalCheck
          title="چگونه می‌توانم محصول را در دیوار خریداری کنم؟"
          content="شما می‌توانید به راحتی پس از انتخاب و ثبت سفارش خود، محصول مورد نظر را دریافت کنید. فقط کافی است محصول دلخواه خود را از میان مجموعه گسترده ما انتخاب کنید، اطلاعات مورد نیاز را وارد کنید و سفارش خود را ثبت نمایید. ما باقی مراحل را انجام می‌دهیم و محصول شما را در سریع‌ترین زمان ممکن به دستتان می‌رسانیم."
          products={[
            {
              productName: "صبظ ماشین",
              imageSrc: "D:ForoushyarFrontend\foroushyarsrcassetsLogo.tsx",
            },
          ]}
        />
      )}

      {/* buttons */}
      <CancelSaveButton
        whiteButtonLabel="قبلی"
        redButtonLabel={step === 75 ? "ارسال پیام گروهی" : "بعدی"}
        onWhiteClick={() => PrevClickHandler(step)}
        onRedClick={() => {
          NextClickHandler(step);
        }}
      />
    </div>
  );
};

export default BulkMessagingPage;
