import FunkyPagesHero from 'components/general/FunkyPagesHero';
import PlanGuard from 'guards/PlanGuard';

const MasterClasses = () => {
  return (
    <div className='container w-full px-container-base flex flex-col py-[1.875rem]'>
      <FunkyPagesHero
        description='Find and register for masterclasses organized by Anthill studios'
        title='Master Classes'
      />
      <PlanGuard page='master-classes'>
        <div></div>
      </PlanGuard>
    </div>
  );
};

export default MasterClasses;
