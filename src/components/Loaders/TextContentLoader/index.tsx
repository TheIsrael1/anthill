import { Skeleton } from 'components/shadcn/skeleton';
import { cn } from 'lib/utils';

interface ITextContentLoader {
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
}

const TextContentLoader = ({ isLoading, className, children }: ITextContentLoader) => {
  return isLoading ? (
    <div className={cn('w-full flex flex-col gap-4', className)}>
      <Skeleton className='w-full max-w-[20rem] h-[2rem]' />
      <Skeleton className='w-full h-[2rem]' />
      <Skeleton className='w-full h-[20rem]' />
    </div>
  ) : (
    <>{children}</>
  );
};

export default TextContentLoader;
