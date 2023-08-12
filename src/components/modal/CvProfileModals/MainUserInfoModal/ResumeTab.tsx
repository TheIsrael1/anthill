import { TabsContent } from 'components/shadcn/ui/tabs';
import { Button } from 'components/shadcn/ui/button';

interface Iprops {
  switchTab: (tab: string) => void;
  data: string[];
}
const ResumeTab = ({ switchTab, data }: Iprops) => {
  return (
    <TabsContent value='Resume' className='h-[70vh] mt-8  mx-8'>
      <div className='bg-blue-600 flex flex-col justify-center items-center h-full py-[10rem] '>
        <Button
          onClick={() => {
            switchTab(data[0]);
          }}
        >
          Prev
        </Button>
        <p>Resume</p>
        <Button
          onClick={() => {
            switchTab(data[2]);
          }}
        >
          Save changes
        </Button>
      </div>
    </TabsContent>
  );
};

export default ResumeTab;
