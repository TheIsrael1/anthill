import { TabsContent } from 'components/shadcn/ui/tabs';
import { Button } from 'components/shadcn/ui/button';
import ListInput from '../AddSkillsModal/ListInput';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import { useForm, Controller } from 'react-hook-form';
import React from 'react';
import * as z from 'zod';

import { Form, FormField } from 'components/shadcn/ui/form';
import { Input } from 'components/shadcn/input';
import { toast } from 'components/shadcn/ui/use-toast';

import Icon from 'utils/Icon';
import FileDropzone from '../AddResumeModal/FileDropZone';
const FormSchema = z.object({
  file: z.string({
    required_error: 'Twitter is required.',
  }),
});
interface Iprops {
  switchTab: (tab: string) => void;
  handleComplete: (tab: string) => void;

  data: string[];
}
const ResumeTab = ({ switchTab, data, handleComplete }: Iprops) => {
  const [items, setItems] = useState<string[]>([]);
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

  const handleFileDrop = (files: any, setFieldValue: any) => {
    setFieldValue('file', files[0]);
  };

  return (
    <TabsContent value='Resume' className='h-[70vh] mt-8  mx-8'>
      <div className=' flex-col flex h-full '>
        <div className='flex flex-col mb-8 px-1'>
          <h2 className='text-lg'>Resume & Skills</h2>
          <h3 className='text-xs text-gray-500'>Upload your resume and enter your skills</h3>
        </div>
        <ListInput items={items} setItems={setItems} />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
            <section className=' pb-[3rem] sm:pb-[4rem] md:pb-[2rem] lg:pb-[7rem] mb-4 sm:mb-4 md:mb-1 lg:mb-1 '>
              <h3 className='text-xs text-gray-500'>Upload Resume</h3>

              <FormField
                name='file'
                control={form.control}
                render={({ field }) => (
                  <FileDropzone
                    onDrop={(acceptedFiles: any) => field.onChange(acceptedFiles[0])}
                    file={field.value}
                  />
                )}
              />
            </section>
            <div className='flex items-center justify-between w-full gap-4'>
              <button
                onClick={() => {
                  switchTab(data[0]);
                }}
                type='button'
                className='w-max px-4 py-1 shadow-9 bg-white rounded-[6px] flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'
              >
                <Icon
                  name='arrowBack'
                  svgProp={{
                    className:
                      'text-primary-1  w-4  cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
                  }}
                />
                <span className='font-[500] text-xs leading-[24px] tracking-[0.4px] text-primary-1 whitespace-nowrap'>
                  {`previous`.toUpperCase()}
                </span>
              </button>
              <button
                onClick={() => {
                  switchTab(data[2]);
                  handleComplete(data[1]);
                }}
                type='button'
                className='px-3 py-1 bg-primary-1 rounded-[6px] flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'
              >
                <span className='font-[500] text-xs  leading-[24px] tracking-[0.4px] text-white'>
                  {`Save and continue`.toUpperCase()}
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

export default ResumeTab;
