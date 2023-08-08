import EmptyContent from '../EmptyContent';

const PersonalInformationSection = () => {
  return (
    <section className='bg-white p-8 rounded-md'>
      <h4 className='relative font-[700] text-sm leading-[40px] tracking-[0.15px]'>
        Personal Information
      </h4>
      <EmptyContent description='Personal Information' />
    </section>
  );
};

export default PersonalInformationSection;
