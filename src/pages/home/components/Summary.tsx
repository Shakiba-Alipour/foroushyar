const Summary = ({ data }: { data: { current: number; change: number } }) => {
  return (
    <div className=" flex flex-row-reverse items-center">
      {/* the current value */}
      <p className="text-xl font-bold mr-2 h-fit">{data.current}</p>
      {/* the change */}
      <p
        className={`text-sm h-fit ${
          data.change >= 0 ? "text-Success-Default" : "text-Warning-Default"
        }`}
      >
        {data.change >= 0 ? "↑" : "↓"}
        {"%" + Math.abs(data.change)}
      </p>
    </div>
  );
};

export default Summary;
