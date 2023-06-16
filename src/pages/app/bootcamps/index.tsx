import FunkyPagesHero from 'components/general/FunkyPagesHero';
import PlanGuard from 'guards/PlanGuard';

const Bootcamps = () => {
  return (
    <div className='container w-full px-container-base flex flex-col py-[1.875rem]'>
      <FunkyPagesHero
        description='Access bi-annual bootcamps and register!'
        title='Bi-annual Bootcamps'
      />
      <PlanGuard page='bootcamps'>
        <div></div>
      </PlanGuard>
    </div>
  );
};
export default Bootcamps;
