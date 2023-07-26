import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate, useParams } from 'react-router-dom';
import blogImg from 'assets/image/blogImageBig.png?format=webp&imagetools';
import dpIcon from 'assets/image/demoDp.jpg?format=webp&imagetools';

import Icon from 'utils/Icon';
import { shimmer, toBase64 } from 'utils/general/shimmer';
import { useState } from 'react';
import BlogCard from 'components/general/BlogCard';
import { useQuery } from '@tanstack/react-query';
import contentService from 'services/content';
import { processError } from 'helper/error';
import { apiInterface, contentApiItemInterface } from 'types';

const SingleBlog = () => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  const { id } = useParams();

  const { data } = useQuery<any, any, apiInterface<contentApiItemInterface[]>>({
    queryKey: ['get-blogs'],
    queryFn: () =>
      contentService.getSingleContent({
        organization_id: import.meta.env.VITE_TIMBU_ORG_ID,
        id,
      }),
    onError: (err) => {
      processError(err);
    },
  });

  console.log('dd', data);

  return (
    <main className='relative w-full px-container-base '>
      <div className='w-full my-[1.5rem] rounded-[1rem] bg-white py-[1rem] sm:py-[2.25rem] px-4 sm:px-[2.5rem] flex flex-col '>
        <div
          onClick={() => navigate(-1)}
          className='mb-[1.37rem] gap-1 flex items-center w-max px-[2px] py-1 rounded-[8px] cursor-pointer  hover:bg-slate-100 transition-colors duration-300 ease-in-out active:bg-slate-200'
        >
          <Icon
            name='arrowBack'
            svgProp={{ width: '1.5rem', height: '1.5rem', className: 'text-secondary-9' }}
          />
          <h5 className='text-secondary-9/[0.87]'>Go Back</h5>
        </div>
        <div className='flex flex-col md:flex-row gap-4 justify-between w-full mb-[1.6rem]'>
          <h5 className='text-[1.5rem] font-[500] leading-[113%] text-secondary-9/[0.87]'>
            "From Script to Screen: The Filmmaking Process"
          </h5>
          <div className='flex items-center gap-1'>
            <span className='text-secondary-9/60 leading-[175%]'>Bookmark</span>
            <Icon name='BookmarkIcon' svgProp={{ className: 'text-secondary-1' }} />
          </div>
        </div>
        <div className='w-full rounded-[8px] h-[19.56rem] overflow-hidden mb-4'>
          <LazyLoadImage
            placeholderSrc={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            src={blogImg}
            className='w-full h-full transition-transform duration-300 ease-in-out bg-top bg-cover group-hover:scale-105'
            alt=''
          />
        </div>
        <div className='flex items-center justify-between w-full mb-2'>
          <span className='text-secondary-9/60 leading-[1.25rem] tracking-[0.00938rem]'>
            Created 16/2/2023 @ 12:22PM
          </span>
          <div
            onClick={() => setLiked(!liked)}
            className='flex items-end gap-[0.5rem] cursor-pointer'
          >
            <span className='text-secondary-9/60 leading-[1rem] tracking-[0.00938rem]'>
              {liked ? `160` : `159`}
            </span>
            <Icon
              name='likeIcon'
              svgProp={{
                className: `${liked ? `text-danger-4` : `text-slate-400`} `,
              }}
            />
          </div>
        </div>
        <p className='text-primary-9/[0.87] leading-[2rem] tracking-[0.00938rem] mb-[2.5rem]'>
          But I must explain to you how all this mistaken idea of denouncing pleasure and praising
          pain was born and I will give you a complete account of the system, and expound the actual
          teachings of the great explorer of the truth, the master-builder of human happiness. No
          one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because
          those who do not know how to pursue pleasure rationally encounter consequences that are
          extremely painful. Nor again is there anyone who loves or pursues or desires to obtain
          pain of itself, because it is pain, but because occasionally circumstances occur in which
          toil and pain can procure him some great pleasure. To take a trivial example, which of us
          ever undertakes laborious physical exercise, except to obtain some advantage from it? But
          who has any right to find fault with a man who chooses to enjoy a pleasure that has no
          annoying consequences, or one who avoids a pain that produces no resultant pleasure?
          <br />
          <br />
          But I must explain to you how all this mistaken idea of denouncing pleasure and praising
          pain was born and I will give you a complete account of the system, and expound the actual
          teachings of the great explorer of the truth, the master-builder of human happiness. No
          one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because
          those who do not know how to pursue pleasure rationally encounter consequences that are
          extremely painful. Nor again is there anyone who loves or pursues or desires to obtain
          pain of itself, because it is pain, but because occasionally circumstances occur in which
          toil and pain can procure him some great pleasure. To take a trivial example, which of us
          ever undertakes laborious physical exercise, except to obtain some advantage from it? But
          who has any right to find fault with a man who chooses to enjoy a pleasure that has no
          annoying consequences, or one who avoids a pain that produces no resultant pleasure?
        </p>
        <div className='flex items-center gap-2 mb-[1.5rem]'>
          <Icon name='gearIcon' svgProp={{ className: 'text-primary-1' }} />
          <span className='text-primary-1 leading-[175%] tracking-[0.00938rem]'>
            Similar Articles
          </span>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-[1.5rem] gap-y-[2.5rem]'>
          {[...Array(3)]?.map((_, idx) => (
            <div key={idx} className='w-full h-full'>
              <BlogCard
                authorImg={dpIcon}
                authorName={`Mohammad Reza`}
                authorRole={`Editor, Polar Studios`}
                blogImage={blogImg}
                category={`Production`}
                date={`18 April, 2022`}
                description={`
                    Filmmaking is an art form that requires a combination of technical skills and creativity.
                    As a filmmaker, it's essential to understand...
                    `}
                title={` "From Script to Screen: The Filmmaking Process"`}
                link={`inner-blog`}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SingleBlog;
