import FunkyPagesHero from 'components/general/FunkyPagesHero';
import PlanGuard from 'guards/PlanGuard';

const GeneralForumns = () => {
  return (
    <div className='container w-full px-container-base flex flex-col py-[1.875rem]'>
      <FunkyPagesHero
        description='As the community questions you need answers to by creating a thread'
        title='General Forums'
      />
      <PlanGuard page='general-forums'>
        <div></div>
      </PlanGuard>
    </div>
  );
};

export default GeneralForumns;
