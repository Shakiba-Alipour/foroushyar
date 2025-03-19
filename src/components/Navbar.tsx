import { Button } from "antd";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const items = [
    { key: "home", label: "خانه", to: "home" },
    { key: "features", label: "قابلیت‌ها", to: "features" },
    { key: "contact_us", label: "تماس با ما", to: "contact_us" },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActive(id);
  };

  return (
    <div className="w-full flex flex-grow flex-row mx-6 items-center justify-between">
      <div className="flex flex-row">
        {items.map(({ key, label, to }) => (
          <span
            onClick={() => handleScroll(to)}
            key={key}
            className={`cursor-pointer mx-4 ${
              active === key
                ? "text-Primary-Default font-semibold"
                : "text-black"
            }`}
          >
            {label}
          </span>
        ))}
      </div>

      <Button className="bg-Primary-Background text-Neutral-White hover:!bg-Neutral-SecondaryBackground hover:!text-Primary-Hover hover:!border-Primary-Hover">
        همین حالا امتحان کنید!
      </Button>
    </div>
  );
};

export default Navbar;
