import EmptyContent from '../EmptyContent';

const SkillSectionCvProfile = () => {
  return (
    <section className='bg-white p-8 rounded-md'>
      <h4 className='relative font-[700] text-sm leading-[40px] tracking-[0.15px]'>Skills</h4>
      <EmptyContent description='skills' IconSize='150' />
    </section>
  );
};

export default SkillSectionCvProfile;
