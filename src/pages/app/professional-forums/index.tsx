import FunkyPagesHero from 'components/general/FunkyPagesHero';
import PlanGuard from 'guards/PlanGuard';

const ProfessionalForums = () => {
  return (
    <div className='container w-full px-container-base flex flex-col py-[1.875rem]'>
      <FunkyPagesHero
        description='Ask Professionals and Masters  questions you need answers to by creating a thread'
        title='Professional Forums'
      />
      <PlanGuard page='professional-forums'>
        <div></div>
      </PlanGuard>
    </div>
  );
};

export default ProfessionalForums;
