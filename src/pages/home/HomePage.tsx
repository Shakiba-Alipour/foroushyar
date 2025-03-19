import Dashboard from "./components/Dashboard";

const HomePage = () => {
  return (
    // flex-grow pushes the menu to the bottom if there's not enough content
    <div className="flex flex-col m-4 w-full lg:w-5/6 px-4 lg:px-0">
      <h1 className="text-lg font-bold w-fit text-Text+Icon-01">خانه</h1>

      <Dashboard />
    </div>
  );
};

export default HomePage;
