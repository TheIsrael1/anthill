import { TabsContent } from 'components/shadcn/ui/tabs';
import { Button } from 'components/shadcn/ui/button';
import AddProjectForm from '../AddProjectModal/addProjectForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import React from 'react';
import * as z from 'zod';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'components/shadcn/ui/form';
import { Input } from 'components/shadcn/input';
import { toast } from 'components/shadcn/ui/use-toast';
const FormSchema = z.object({
  title: z.string().min(2, {
    message: 'Please enter a valid title',
  }),
  link: z.string().min(2, {
    message: 'Please enter a valid link',
  }),
  role: z.string().min(2, {
    message: 'Please enter a valid role',
  }),
});
interface Iprops {
  switchTab: (tab: string) => void;
  handleComplete: (tab: string) => void;
  data: string[];
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setCompleted?: React.Dispatch<React.SetStateAction<string[]>>;
}
const ProjectsTab = ({ switchTab, data, setModalOpen, handleComplete, setCompleted }: Iprops) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);

    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <TabsContent value='Projects' className='h-[70vh] mt-8  mx-8'>
      <div className=' flex justify-center flex-col items-center h-full '>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
            <section className=' '>
              <FormField
                control={form.control}
                name='title'
                render={({ field }) => (
                  <FormItem>
                    <div className='relative'>
                      <label className='absolute top-[-20%] left-2 bg-white rounded-full font-extralight text-secondary-1 text-xs px-1'>
                        Project Title
                      </label>
                      <FormControl>
                        <Input className=' text-secondary-3' {...field} />
                      </FormControl>
                    </div>
                    <FormMessage className='text-xs mt-1' />
                  </FormItem>
                )}
              />
              <section className='grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 mt-8'>
                <FormField
                  control={form.control}
                  name='role'
                  render={({ field }) => (
                    <FormItem>
                      <div className='relative'>
                        <label className='absolute top-[-20%] left-2 bg-white rounded-full font-extralight text-secondary-1 text-xs px-1'>
                          Role
                        </label>
                        <FormControl>
                          <Input className=' text-secondary-3' {...field} />
                        </FormControl>
                      </div>
                      <FormMessage className='text-xs mt-1' />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='link'
                  render={({ field }) => (
                    <FormItem>
                      <div className='relative'>
                        <label className='absolute top-[-20%] left-2 bg-white rounded-full font-extralight text-secondary-1 text-xs px-1'>
                          Project Link
                        </label>
                        <FormControl>
                          <Input className=' text-secondary-3' {...field} />
                        </FormControl>
                      </div>
                      <FormMessage className='text-xs mt-1' />
                    </FormItem>
                  )}
                />
              </section>
            </section>
            <div className='flex items-center justify-between w-full gap-4'>
              <button
                onClick={() => {
                  switchTab(data[3]);
                }}
                type='button'
                className='w-max px-[0.87rem] h-[38px] shadow-9 bg-white rounded-[6px] flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'
              >
                <span className='font-[500] text-xs leading-[24px] tracking-[0.4px] text-primary-1 whitespace-nowrap'>
                  {`Previous`.toUpperCase()}
                </span>
              </button>
              <button
                type='button'
                onClick={() => {
                  if (setModalOpen) {
                    setModalOpen(false);
                  }
                  switchTab(data[0]);
                  handleComplete(data[4]);
                  if (setCompleted) {
                    setCompleted([]); //would consider taking this line out
                  }
                }}
                className='w-[130px] h-[38px] bg-primary-1 rounded-[6px] flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'
              >
                <span className='font-[500] text-xs  leading-[24px] tracking-[0.4px] text-white'>
                  {`Complete`.toUpperCase()}
                </span>
              </button>
            </div>
          </form>
        </Form>
      </div>
    </TabsContent>
  );
};

export default ProjectsTab;
