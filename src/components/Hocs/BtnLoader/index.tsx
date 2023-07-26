import { cn } from 'lib/utils';

interface IBtnLoader {
  children: React.ReactNode;
  isLoading: boolean;
  className?: string;
}

const BtnLoader = ({ className, isLoading, children }: IBtnLoader) => {
  return !isLoading ? (
    <>{children}</>
  ) : (
    <div
      className={cn(
        'w-[1rem] h-[1rem] rounded-[50px] border-2 border-white border-t-white/10 border-l-white/10 animate-spin mx-auto',
        className,
      )}
    ></div>
  );
};

export default BtnLoader;
