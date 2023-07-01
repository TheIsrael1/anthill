import CommentThreadCard from 'components/general/CommentThreadCard';
import FunkyPagesHero from 'components/general/FunkyPagesHero';
import InputAddComboBox from 'components/general/InputAddComboBox';
import LinksFilter from 'components/general/LinksFilter';
import PillTabs from 'components/general/PillTabs';
import PlanGuard from 'guards/PlanGuard';
import { useState } from 'react';

type filterTypes = 'Trending' | 'Recently added' | 'Your Threads' | 'Starred' | 'Interactions';

const generalFilters: filterTypes[] = [
  'Trending',
  'Recently added',
  'Your Threads',
  'Starred',
  'Interactions',
];
const GeneralForumns = () => {
  const [currFilter, setCurrFilter] = useState<filterTypes>('Trending');

  return (
    <div className='container w-full px-container-base flex flex-col py-[1.875rem]'>
      <FunkyPagesHero
        description='As the community questions you need answers to by creating a thread'
        title='General Forums'
      />
      <PlanGuard page='general-forums'>
        <>
          <div className='w-full max-w-[800px] relative mx-auto my-[1.5rem] md:my-0 md:mb-[1rem] md:-top-[1.5rem]'>
            <InputAddComboBox placeholder='Add a new thread...' />
          </div>
          <div className='flex justify-center w-full mb-[1.5rem]'>
            <PillTabs
              tabs={generalFilters}
              currActive={currFilter}
              onSelect={(i) => setCurrFilter(i)}
            />
          </div>
          <div className='flex justify-center w-full mb-[1.5rem]'>
            <LinksFilter
              tabs={[
                {
                  link: ``,
                  sublinks: [
                    { title: `Best tv shows`, link: `` },
                    { link: ``, title: `Awards` },
                  ],
                  title: `General`,
                },
                {
                  link: ``,
                  sublinks: [],
                  title: `Production`,
                },
                {
                  link: ``,
                  sublinks: [],
                  title: `Post-production`,
                },
                {
                  link: ``,
                  sublinks: [],
                  title: `Distribution and Marketing`,
                },
                {
                  link: ``,
                  sublinks: [],
                  title: `Animation/vfx`,
                },
              ]}
            />
          </div>
          <CommentThreadCard />
        </>
      </PlanGuard>
    </div>
  );
};

export default GeneralForumns;
