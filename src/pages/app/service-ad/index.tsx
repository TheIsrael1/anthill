import FunkyPagesHero from 'components/general/FunkyPagesHero';
import PlanGuard from 'guards/PlanGuard';

const ServiceAd = () => {
  return (
    <div className='container w-full px-container-base flex flex-col py-[1.875rem]'>
      <FunkyPagesHero
        description='Put out an Ad for a service and find interested candidates!'
        title='Advertise a Service'
      />
      <PlanGuard page='service-ad'>
        <div></div>
      </PlanGuard>
    </div>
  );
};

export default ServiceAd;
