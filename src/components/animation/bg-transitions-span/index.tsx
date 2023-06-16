const BgTransitionSpan = ({ className }: { className: string }) => {
  return (
    <span
      className={`absolute w-[calc(100%+20px)] h-full  transition-transform duration-300 -translate-x-full group-hover:-translate-x-0 cursor-pointer ease-in-out  ${className}`}
    ></span>
  );
};

export default BgTransitionSpan;
