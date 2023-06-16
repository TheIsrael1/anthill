import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import Icon from 'utils/Icon';

interface IAssetCard {
  image: string;
  title: string;
  desc: string;
  link?: string;
}

const AssetCard = ({ desc, image, title, link = '' }: IAssetCard) => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-between w-full cursor-pointer h-max group'>
      <div
        className='relative w-full h-[15rem] mb-2 rounded-[8px]  overflow-hidden cursor-cardCursor
        after:w-full after:h-full after:absolute after:bg-transparent hover:after:bg-black/40 after:transition-all after:duration-300 after:top-0 after:left-0 transition-all ease-in-out duration-300
        '
      >
        <LazyLoadImage
          src={image}
          alt=''
          className='w-full h-full transition-transform duration-300 ease-in-out bg-top bg-cover group-hover:scale-105'
        />
      </div>
      <div className='flex flex-col w-full gap-1'>
        <div className='flex items-center justify-between'>
          <h6 className='font-[500] text-[20px] leading-[32px] tracking-[0.15px] text-primary-9/[0.87]'>
            {title}
          </h6>
          <Icon name='starIcon' svgProp={{ className: 'text-primary-1' }} />
        </div>
        <div className='leading-[28px] tracking-[0.15px] text-primary-9/60'>{desc}</div>
      </div>
    </div>
  );
};

export default AssetCard;
