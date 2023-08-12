import { TabsContent } from 'components/shadcn/ui/tabs';
import { Button } from 'components/shadcn/ui/button';

interface Iprops {
  switchTab: (tab: string) => void;
  data: string[];
}
const ExperiencesTab = ({ switchTab, data }: Iprops) => {
  return (
    <TabsContent value='Experiences' className='h-[70vh] mt-8  mx-8'>
      <div className='bg-green-600 flex flex-col justify-center items-center h-full py-[10rem] '>
        <Button
          onClick={() => {
            switchTab(data[1]);
          }}
        >
          Prev
        </Button>
        <p>Experiences</p>
        <Button
          onClick={() => {
            switchTab(data[3]);
          }}
        >
          Save changes
        </Button>
      </div>
    </TabsContent>
  );
};

export default ExperiencesTab;
