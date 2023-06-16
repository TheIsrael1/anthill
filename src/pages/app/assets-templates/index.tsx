import AssetCard from 'components/general/AssetCard';
import FunkyPagesHero from 'components/general/FunkyPagesHero';
import PillTabs from 'components/general/PillTabs';
import SearchComboBox from 'components/general/SearchComboBox';
import PlanGuard from 'guards/PlanGuard';
import { useState } from 'react';
import filmImg from 'assets/image/assetFilmImg.png';

type filterTypes =
  | 'All'
  | 'Pre-Production'
  | 'Post-production'
  | 'Distribution and Marketing'
  | 'Starred';

const generalFilters: filterTypes[] = [
  'All',
  'Pre-Production',
  'Distribution and Marketing',
  'Starred',
];

const AssetsTemplates = () => {
  const [currFilter, setCurrFilter] = useState<filterTypes>('All');

  return (
    <div className='container w-full px-container-base flex flex-col py-[1.875rem]'>
      <FunkyPagesHero
        description='Find and download fimmaking assets you need'
        title='Assets & Templates'
      />
      <PlanGuard page='assets-templates'>
        <>
          <div className='w-full max-w-[800px] relative mx-auto my-[1.5rem] md:my-0 md:mb-[1.75rem] md:-top-[1.5rem]'>
            <SearchComboBox />
          </div>
          <div className='flex justify-center w-full mb-[1.5rem]'>
            <PillTabs
              tabs={generalFilters}
              currActive={currFilter}
              onSelect={(i) => setCurrFilter(i)}
            />
          </div>
          <div className='grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-[1.5rem] gap-y-[3.875rem]'>
            {[...Array(8)]?.map((_, idx) => (
              <div key={idx} className='w-full h-full'>
                <AssetCard
                  desc='Storytelling blueprint for movies.'
                  image={filmImg}
                  title='Scripts'
                />
              </div>
            ))}
          </div>
        </>
      </PlanGuard>
    </div>
  );
};

export default AssetsTemplates;
