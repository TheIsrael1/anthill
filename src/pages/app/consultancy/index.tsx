import FunkyPagesHero from 'components/general/FunkyPagesHero';
import PlanGuard from 'guards/PlanGuard';

const Consultancy = () => {
  return (
    <div className='container w-full px-container-base flex flex-col py-[1.875rem]'>
      <FunkyPagesHero
        description='Would you like to consult with Anthill Studios for a Project?!'
        title='Consultancy'
      />
      <PlanGuard page='consultancy'>
        <div></div>
      </PlanGuard>
    </div>
  );
};

export default Consultancy;
