const Hamburger = ({ menuOpen }: { menuOpen: boolean }) => {
  return (
    <div className='relative flex overflow-hidden items-center justify-center  h-[20px] transform transition-all'>
      <div className='flex flex-col justify-between w-[20px] h-[18px] transform transition-all duration-300 origin-center overflow-hidden'>
        <div
          className={`bg-secondary-11 h-[2px] w-5 transform transition-all duration-300 origin-left ${
            menuOpen ? `translate-x-10` : ``
          } delay-50`}
        ></div>
        <div
          className={`bg-secondary-11 h-[2px] w-5  transform transition-all duration-300 ${
            menuOpen ? `translate-x-10` : ``
          } delay-50`}
        ></div>
        <div
          className={`bg-secondary-11 h-[2px] w-5 transform transition-all duration-300 origin-left ${
            menuOpen ? `translate-x-10` : ``
          } delay-50`}
        ></div>
        <div
          className={`absolute items-center justify-between transform transition-all duration-300 top-2.5 ${
            menuOpen ? `w-12 translate-x-0 ` : `-translate-x-10 w-0`
          } flex `}
        >
          <div
            className={`absolute bg-secondary-11 h-[2px] w-5 transform transition-all duration-300  delay-100 ${
              menuOpen ? `rotate-45` : `rotate-0`
            }`}
          ></div>
          <div
            className={`absolute bg-secondary-11 h-[2px] w-5 transform transition-all duration-300  delay-100 ${
              menuOpen ? ` -rotate-45` : `-rotate-0`
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
