import FunkyPagesHero from 'components/general/FunkyPagesHero';
import LinksFilter from 'components/general/LinksFilter';
import SearchComboBox from 'components/general/SearchComboBox';
import PlanGuard from 'guards/PlanGuard';

const BtsInternal = () => {
  return (
    <div className='container w-full px-container-base flex flex-col py-[1.875rem]'>
      <FunkyPagesHero
        description='Find out what goes on behind the scenes of blockbuster movies'
        title='BTS'
      />
      <PlanGuard page='bts'>
        <>
          <div className='w-full max-w-[800px] relative mx-auto my-[1.5rem] md:my-0 md:mb-[1.75rem] md:-top-[1.5rem]'>
            <SearchComboBox />
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
        </>
      </PlanGuard>
    </div>
  );
};

export default BtsInternal;
