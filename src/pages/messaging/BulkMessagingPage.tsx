import CancelSaveButton from "../../components/CancelSaveButton";
import ProductSelection from "./components/ProductSelection";

const BulkMessagingPage = () => {
  return (
    <div className="flex-grow flex-col m-4">
      <ProductSelection />
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
