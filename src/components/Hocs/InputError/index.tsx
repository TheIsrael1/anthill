interface IInputErrorWrapper {
  children: React.ReactNode;
  error?: string;
}

const InputErrorWrapper = ({ error, children }: IInputErrorWrapper) => {
  return (
    <div className='w-full flex flex-col gap-1'>
      {children}
      <span
        className={`text-red-500 text-[12px] ${
          !error ? `hidden` : `flex`
        } transition-all ease-in-out duration-300`}
      >
        {`${error}`}
      </span>
    </div>
  );
};

export default InputErrorWrapper;
