import SocialAccounts from "./SocialAccounts";
import ReceiveMessages from "./ReceiveMessages";

const Contact = () => {
  return (
    <div
      className="flex flex-col justify-items-center items-center"
      id="contact_us"
    >
      <h2>با ما صحبت کنید</h2>
      <p className="text-sm text-Neutral-PrimaryBackgroundDark mb-4">
        مشتاق دریافت پیشنهادات و انتقادات شما هستیم
      </p>

      <div className="w-full flex flex-col justify-between lg:flex-row md:flex-row sm:flex-col items-center">
        <SocialAccounts />
        <ReceiveMessages />
      </div>
    </div>
  );
};

export default Contact;
