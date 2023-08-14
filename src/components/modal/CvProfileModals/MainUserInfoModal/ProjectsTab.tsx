import { TabsContent } from 'components/shadcn/ui/tabs';
import { Button } from 'components/shadcn/ui/button';
import AddProjectForm from '../AddProjectModal/addProjectForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import React from 'react';
import * as z from 'zod';
import Icon from 'utils/Icon';

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
const ProjectsTab = ({
  switchTab,
  data: tabData,
  setModalOpen,
  handleComplete,
  setCompleted,
}: Iprops) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    if (setModalOpen) {
      setModalOpen(false);
    }
    switchTab(tabData[0]);
    handleComplete(tabData[4]);
    if (setCompleted) {
      setCompleted([]); //would consider taking this line out
    }

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
    <TabsContent value='Projects' className='h-[70vh] mt-8  md:mx-8'>
      <div className=' flex  flex-col  h-full '>
        <div className='flex flex-col mb-8 px-1'>
          <h2 className='text-lg'>Projects</h2>
          <h3 className='text-xs text-gray-500'>Add links to Projects you’ve worked on</h3>
        </div>
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
                        <Input
                          className=' placeholder:text-secondary-1 placeholder:text-xs text-secondary-3'
                          placeholder='Add a title for your Project'
                          {...field}
                        />
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
                          <Input
                            className=' placeholder:text-secondary-1 placeholder:text-xs text-secondary-3'
                            placeholder='What was your role'
                            {...field}
                          />
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
                          <Input
                            className=' placeholder:text-secondary-1 placeholder:text-xs text-secondary-3'
                            placeholder='Paste link to project (Vimeo or Youtube)'
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormMessage className='text-xs mt-1' />
                    </FormItem>
                  )}
                />
              </section>
            </section>
            <div className='flex justify-end'>
              <button
                type='button'
                className=' px-2 md:px-4 py-1   bg-transparent border-primary-1 border rounded-[7px] flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'
              >
                <span className='font-[400] text-gray-600 text-xs md:text-sm leading-[24px] tracking-[0.4px]'>
                  Add Project
                </span>
                <Icon
                  name='plusIcon'
                  svgProp={{
                    className:
                      'text-primary-1  w-4 font-light cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
                  }}
                />
              </button>
            </div>
            <div className='flex items-center justify-between w-full gap-4'>
              <button
                onClick={() => {
                  switchTab(tabData[3]);
                }}
                type='button'
                className='w-max px-3 py-1 shadow-9 bg-white rounded-[6px] flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'
              >
                <Icon
                  name='arrowBack'
                  svgProp={{
                    className:
                      'text-primary-1  w-4  cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
                  }}
                />
                <span className='font-[500] text-xs leading-[24px] tracking-[0.4px] text-primary-1 whitespace-nowrap'>
                  {`Previous`.toUpperCase()}
                </span>
              </button>
              <button
                type='submit'
                className='px-4  py-1 bg-primary-1 rounded-[6px] flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'
              >
                <span className='font-[500] text-xs  leading-[24px] tracking-[0.4px] text-white'>
                  {`Complete`.toUpperCase()}
                </span>
                <Icon
                  name='arrowTo'
                  svgProp={{
                    className:
                      'text-white  w-4  cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
                  }}
                />
              </button>
            </div>
          </form>
        </Form>
      </div>
    </TabsContent>
  );
};

export default ProjectsTab;
