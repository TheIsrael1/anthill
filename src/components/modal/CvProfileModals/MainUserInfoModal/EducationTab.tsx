import { TabsContent } from 'components/shadcn/ui/tabs';
import { Button } from 'components/shadcn/ui/button';

interface Iprops {
  switchTab: (tab: string) => void;
  data: string[];
}
const EducationTab = ({ switchTab, data }: Iprops) => {
  return (
    <TabsContent value='Education' className='h-[70vh] mt-8  mx-8'>
      <div className='bg-yellow-600 flex-col flex justify-center items-center h-full py-[10rem] '>
        <Button
          onClick={() => {
            switchTab(data[2]);
          }}
        >
          Prev
        </Button>
        <p>Education</p>
        <Button
          onClick={() => {
            switchTab(data[4]);
          }}
        >
          Save changes
        </Button>
      </div>
    </TabsContent>
  );
};

export default EducationTab;
