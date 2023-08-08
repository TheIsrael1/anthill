import PlanGuard from 'guards/PlanGuard';
import PersonalInformationSection from 'components/general/Cv-profile/PersonalInformation';
import EducationSectionCvProfile from 'components/general/Cv-profile/Education';
import ExperienceSectionCvProfile from 'components/general/Cv-profile/Experiences';
import ProjectSectionCvProfile from 'components/general/Cv-profile/Projects';
import SkillSectionCvProfile from 'components/general/Cv-profile/Skills';
const CVProfile = () => {
  return (
    <div className='container w-full px-container-base flex flex-col py-[1.875rem]'>
      <PlanGuard page='cv-profile'>
        <section className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          <div className='col-span-3 flex flex-col gap-4'>
            <PersonalInformationSection />
            <EducationSectionCvProfile />
            <ExperienceSectionCvProfile />
            <ProjectSectionCvProfile />
          </div>
          <div className='col-span-3 md:col-span-1'>
            <SkillSectionCvProfile />
          </div>
        </section>
      </PlanGuard>
    </div>
  );
};

export default CVProfile;
