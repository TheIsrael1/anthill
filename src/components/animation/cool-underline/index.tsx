const CoolUnderline = ({ fixed }: { fixed?: boolean }) => {
  return (
    <>
      <span
        className={`absolute bottom-0 left-0 w-1 h-1 rounded-[50px] bg-primary-1 -mb-[.5px] opacity-0 group-hover:opacity-100 ${
          fixed ? `!opacity-100` : ``
        } transition-opacity duration-100 ease-in-out`}
      ></span>
      <div className={`absolute bottom-0 w-[calc(100%-8px)] h-[2px] overflow-hidden left-2 `}>
        <div
          className={`w-full h-full  rounded-[24px] bg-primary-1 -translate-x-full  group-hover:-translate-x-0 ${
            fixed ? `!-translate-x-0` : ``
          } duration-300 transition-transform ease-in-out delay-100`}
        ></div>
      </div>
    </>
  );
};

export default CoolUnderline;
