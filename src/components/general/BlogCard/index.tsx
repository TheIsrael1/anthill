import CONSTANTS from 'constant';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import { shimmer, toBase64 } from 'utils/general/shimmer';

interface IBlogCard {
  blogImage: string;
  category: string;
  date: string;
  title: string;
  description: string;
  authorImg: string;
  authorName: string;
  authorRole: string;
  link?: string;
}

const BlogCard = ({
  authorImg,
  authorName,
  authorRole,
  blogImage,
  category,
  date,
  description,
  title,
  link = `/${CONSTANTS.ROUTES.blogs}/test-blog`,
}: IBlogCard) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(link)}
      className='flex flex-col justify-between w-full cursor-pointer h-max group'
    >
      <div className='flex flex-col'>
        <div
          className='relative w-full h-[17.5rem] mb-[2.5rem] rounded-[8px] border-b-4 border-b-warning-1 overflow-hidden cursor-cardCursor
        after:w-full after:h-full after:absolute after:bg-transparent hover:after:bg-black/40 after:transition-all after:duration-300 after:top-0 after:left-0 transition-all ease-in-out duration-300
        '
        >
          <LazyLoadImage
            placeholderSrc={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            src={blogImage}
            alt=''
            className='w-full h-full transition-transform duration-300 ease-in-out bg-top bg-cover group-hover:scale-105'
          />
        </div>
        <div className='flex items-center justify-between w-full mb-4'>
          <span className='text-primary-1 text-[14px] leading-[21px] tracking-[0.1px] font-[600] '>
            #{category}
          </span>
          <span className='text-secondary-2 text-[14px] leading-[21px] tracking-[0.1px] font-[300] '>
            {date}
          </span>
        </div>
        <h5 className='mb-4 text-primary-12 text-[20px] leading-[27px] font-[700]'>{title}</h5>
        <p className='mb-4 text-secondary-2 text-[14px] leading-[21px] tracking-[0.1px] font-[300]'>
          {description}
        </p>
      </div>
      <div className='flex items-center gap-4'>
        <div className='w-[40px] h-[40px] rounded-[50px] overflow-hidden'>
          <LazyLoadImage
            placeholderSrc={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            alt=''
            src={authorImg}
            className='w-full h-full bg-top bg-cover'
          />
        </div>
        <div className='flex flex-col items-start justify-center gap-1'>
          <h6 className='font-[600] text-[16px] leading-[21px] text-primary-9'>{authorName}</h6>
          <span className='text-secondary-2 font-[300] text-[14px] leading-[21px] tracking-[0.15px]'>
            {' '}
            {authorRole}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
