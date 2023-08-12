import { TabsContent } from 'components/shadcn/ui/tabs';
import { Button } from 'components/shadcn/ui/button';
import AddProjectForm from '../AddProjectModal/addProjectForm';

interface Iprops {
  switchTab: (tab: string) => void;
  data: string[];
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
const ProjectsTab = ({ switchTab, data, setModalOpen }: Iprops) => {
  return (
    <TabsContent value='Projects' className='h-[70vh] mt-8  mx-8'>
      <div className=' flex justify-center flex-col items-center h-full py-[10rem] '>
        <AddProjectForm />
        <Button
          onClick={() => {
            switchTab(data[3]);
          }}
        >
          Prev
        </Button>
        <p>Projects</p>
        <Button
          onClick={() => {
            if (setModalOpen) {
              setModalOpen(false);
            }
            switchTab(data[0]);
          }}
        >
          Save changes
        </Button>
      </div>
    </TabsContent>
  );
};

export default ProjectsTab;
