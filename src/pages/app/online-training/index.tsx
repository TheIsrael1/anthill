import FunkyPagesHero from 'components/general/FunkyPagesHero';
import PlanGuard from 'guards/PlanGuard';

const OnlineTraining = () => {
  return (
    <div className='container w-full px-container-base flex flex-col py-[1.875rem]'>
      <FunkyPagesHero
        description='Online interactive sessions, where you can watch tutorials and ask questions'
        title='Online Training'
      />
      <PlanGuard page='online-training'>
        <div></div>
      </PlanGuard>
    </div>
  );
};

export default OnlineTraining;
