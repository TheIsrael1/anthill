import EmptyContent from '../EmptyContent';

const ProjectSectionCvProfile = () => {
  return (
    <section className='bg-white p-8 rounded-md'>
      <h4 className='relative font-[700] text-sm leading-[40px] tracking-[0.15px]'>Projects</h4>
      <EmptyContent description='Projects' />
    </section>
  );
};

export default ProjectSectionCvProfile;
