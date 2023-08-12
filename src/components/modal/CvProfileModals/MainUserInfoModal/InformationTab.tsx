import { TabsContent } from 'components/shadcn/ui/tabs';
import { Button } from 'components/shadcn/ui/button';

interface Iprops {
  switchTab: (tab: string) => void;
  data: string[];
}
const InformationTab = ({ switchTab, data }: Iprops) => {
  return (
    <TabsContent value='Information' className='h-[70vh] mt-8  mx-8'>
      <div className='bg-red-500 flex justify-center items-center  h-full py-[10rem]'>
        <p>Information</p>
        <Button
          onClick={() => {
            switchTab(data[1]);
          }}
        >
          Save changes
        </Button>
      </div>
    </TabsContent>
  );
};

export default InformationTab;
