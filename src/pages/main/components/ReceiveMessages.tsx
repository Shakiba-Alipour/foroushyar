import { Button, Input } from "antd";

const ReceiveMessages = () => {
  return (
    <div className="lg:w-2/5 md:w-2/5 sm:mt-8 sm:w-2/3">
      <h3>ارسال پیام</h3>
      <p className="text-sm">
        در صورت داشتن هرگونه انتقاد، پیشنهاد و یا سوال ما را در جریان بگذارید.
      </p>
      <div className="flex flex-row sm:flex-col">
        <div className="flex flex-col mt-3">
          <p className="text-sm mb-1">نام</p>
          <Input type="string" placeholder="محمد محمدی" />
        </div>
        <div className="flex flex-col mt-3">
          <p className="text-sm mb-1">ایمیل</p>
          <Input type="string" placeholder="info@atenatech.ir" />
        </div>
      </div>
      <div className="flex flex-col mt-3">
        <p className="text-sm mb-1">پیام</p>
        <Input.TextArea rows={4} placeholder="پیام خود را بنویسید." />
      </div>
      <Button className="bg-Primary-Background text-Neutral-White w-1/6 mt-3">
        ارسال
      </Button>
    </div>
  );
};

export default ReceiveMessages;
