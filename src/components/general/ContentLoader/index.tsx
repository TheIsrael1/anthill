import { Skeleton } from 'components/shadcn/skeleton';
import { cn } from 'lib/utils';

interface IContentLoader {
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
  blocksClassName?: string;
  numberOfBlocks?: number;
}

const ContentLoader = ({
  isLoading,
  blocksClassName,
  className,
  children,
  numberOfBlocks = 3,
}: IContentLoader) => {
  return isLoading ? (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-[1.5rem] gap-y-[3.875rem]',
        className,
      )}
    >
      {[...Array(numberOfBlocks)]?.map((_, idx) => (
        <div key={idx} className={cn('w-full  h-[15rem]', blocksClassName)}>
          <Skeleton className='w-full h-full' />
        </div>
      ))}
    </div>
  ) : (
    <>{children}</>
  );
};

export default ContentLoader;
