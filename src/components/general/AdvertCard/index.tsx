import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import Icon from 'utils/Icon';
import { shimmer, toBase64 } from 'utils/general/shimmer';

interface IAdvertCard {
  adImage: string;
  price: string;
  title: string;
  description: string;
  link?: string;
  location: string;
  expiryDate?: string;
}

const AdvertCard = ({ adImage, description, location, price, title, link = '#' }: IAdvertCard) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(link)}
      className='flex flex-col justify-between w-full cursor-pointer h-max group'
    >
      <div className='flex flex-col'>
        <div
          className='relative w-full h-[16.93rem] mb-[1rem] rounded-[8px] border-b-4 border-b-warning-1 overflow-hidden cursor-cardCursor
        after:w-full after:h-full after:absolute after:bg-transparent hover:after:bg-black/40 after:transition-all after:duration-300 after:top-0 after:left-0 transition-all ease-in-out duration-300
        '
        >
          <LazyLoadImage
            placeholderSrc={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            src={adImage}
            alt=''
            className='w-full h-full transition-transform duration-300 ease-in-out bg-top bg-cover group-hover:scale-105'
          />
        </div>
        <div className='flex items-center justify-between w-full mb-4'>
          <span className='text-primary-1 text-[14px] leading-[21px] tracking-[0.1px] font-[600] '>
            Pay: {price}
          </span>
          <span className='text-secondary-2 text-[14px] leading-[21px] tracking-[0.1px] font-[300] '></span>
        </div>
        <h5 className='mb-4 text-primary-12 text-[20px] leading-[27px] font-[700]'>{title}</h5>
        <p className='mb-4 text-secondary-2 text-[14px] leading-[21px] tracking-[0.1px] font-[300]'>
          {description}
        </p>
      </div>
      <div className='flex items-center gap-2'>
        <Icon name='location' svgProp={{ width: '1.5rem', height: '1.5rem' }} />
        <span className='font-[600] text-primary-9'>{location}</span>
      </div>
    </div>
  );
};

export default AdvertCard;
