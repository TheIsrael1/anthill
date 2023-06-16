import CONSTANTS from 'constant';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import Icon from 'utils/Icon';

interface IBtsCard {
  btsImage: string;
  category: string;
  title: string;
  description: string;
  link?: string;
}

const BtsCard = ({ btsImage, category, description, title, link = 'test-bts' }: IBtsCard) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/${CONSTANTS.ROUTES.bts}/${link}`)}
      className='justify-between w-full cursor-pointer h-max group'
    >
      <div
        className='relative w-full h-[17rem] mb-[1.5rem] overflow-hidden border-b-4 rounded-[8px] border-primary-1
      cursor-cardCursor
      after:w-full after:h-full after:absolute after:bg-transparent hover:after:bg-black/40 after:transition-all after:duration-300 after:top-0 after:left-0 transition-all ease-in-out duration-300
      '
      >
        <LazyLoadImage
          alt=''
          src={btsImage}
          className='w-full h-full transition-transform duration-300 ease-in-out bg-center bg-cover group-hover:scale-105'
        />
      </div>
      <div className='flex items-center justify-between w-full mb-4'>
        <span className='text-primary-1 text-[14px] leading-[21px] tracking-[0.1px] font-[600] '>
          #{category}
        </span>
      </div>
      <h5 className='mb-4 text-primary-12 text-[20px] leading-[27px] font-[700]'>{title}</h5>
      <p className='mb-[1.5rem] text-secondary-2 text-[14px] leading-[21px] tracking-[0.1px] font-[300]'>
        {description}
      </p>
      <div className='w-full flex justify-start gap-[0.6875rem] items-center group text-primary-1 cursor-pointer'>
        <span className='font-[500] text-[18px] leading-[24px] tracking-[0.15px] group-hover:underline transition-all ease-in-out'>
          Watch Now!
        </span>
        <Icon name='externalLink' svgProp={{ width: 18, height: 18 }} />
      </div>
    </div>
  );
};

export default BtsCard;
