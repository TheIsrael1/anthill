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
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function AddProjectForm({ setModalOpen }: Iprops) {
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
        <section className='  pt-10 pb-[3rem] sm:pb-[4rem] md:pb-[2rem] lg:pb-[11rem] mb-4 sm:mb-4 md:mb-1 lg:mb-1 '>
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
        <div className='flex items-center justify-end w-full gap-4'>
          <button
            onClick={() => {
              if (setModalOpen) {
                setModalOpen(false);
              }
            }}
            type='button'
            className='w-max px-[0.87rem] h-[38px] shadow-9 bg-white rounded-[6px] flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'
          >
            <span className='font-[500] text-xs leading-[24px] tracking-[0.4px] text-primary-1 whitespace-nowrap'>
              {`Cancel`.toUpperCase()}
            </span>
          </button>
          <button
            type='submit'
            //     onClick={() => doSubSelection()}
            className='w-[130px] h-[38px] bg-primary-1 rounded-[6px] flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'
          >
            <span className='font-[500] text-xs  leading-[24px] tracking-[0.4px] text-white'>
              {`Save Changes`.toUpperCase()}
            </span>
          </button>
        </div>
      </form>
    </Form>
  );
}
