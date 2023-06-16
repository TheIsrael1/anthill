import PlanGuard from 'guards/PlanGuard';

const CVProfile = () => {
  return (
    <div className='container w-full px-container-base flex flex-col py-[1.875rem]'>
      <PlanGuard page='cv-profile'>
        <div></div>
      </PlanGuard>
    </div>
  );
};

export default CVProfile;
