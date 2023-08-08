import PlanGuard from 'guards/PlanGuard';
import PersonalInformationSection from 'components/general/Cv-profile/PersonalInformation';
import EducationSectionCvProfile from 'components/general/Cv-profile/Education';
import ExperienceSectionCvProfile from 'components/general/Cv-profile/Experiences';
import ProjectSectionCvProfile from 'components/general/Cv-profile/Projects';
import SkillSectionCvProfile from 'components/general/Cv-profile/Skills';
import UserInfoEditSection from 'components/general/Cv-profile/UserInfoEdit';
import Icon from 'utils/Icon';
import ResumeSectionCvProfile from 'components/general/Cv-profile/Resume';
import FreeRangeSectionCvProfile from 'components/general/Cv-profile/FreeRange';
const CVProfile = () => {
  return (
    <div className='container w-full px-container-base flex flex-col py-[1.875rem]'>
      <div>
        <button className=' mb-4  rounded-[15px] flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'>
          <Icon
            name='arrowBack'
            svgProp={{
              className:
                ' bg-white rounded-2xl px-1 cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
            }}
          />
          <span className='font-[500] text-sm leading-[24px] tracking-[0.4px]'> Go Back</span>
        </button>
      </div>
      <PlanGuard page='cv-profile'>
        <section className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          <div className='col-span-3 flex flex-col gap-4'>
            <UserInfoEditSection />
            <PersonalInformationSection />
            <ResumeSectionCvProfile />
            <FreeRangeSectionCvProfile />
            <ExperienceSectionCvProfile />
            <EducationSectionCvProfile />
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
