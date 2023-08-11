import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import React from 'react';
import * as z from 'zod';
import { cn } from 'lib/utils';
import { Button } from 'components/shadcn/ui/button';
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
  name: z.string().min(2, {
    message: 'Please enter a valid name.',
  }),
  bio: z.string().min(2, {
    message: 'Please enter a valid bio.',
  }),
});
interface Iprops {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function AddUserInfoForm({ setModalOpen }: Iprops) {
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
        <section className=' border-t-2 border-b-2 pt-6 pb-[3rem] sm:pb-[4rem] md:pb-[2rem] lg:pb-[4rem] mb-4 sm:mb-4 md:mb-1 lg:mb-1 '>
          <div className='flex items-center gap-2 mb-6'>
            <div className='p-[1px] w-[7rem]   bg-white rounded-lg '>
              <img
                src='https://github.com/shadcn.png'
                alt=''
                className='w-full h-full rounded-lg transition-transform duration-300 ease-in-out bg-top bg-cover group-hover:scale-105'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center  w-full gap-4'>
                <button
                  type='button'
                  className='px-2 py-1 bg-primary-1 rounded-[6px] font-extralight flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'
                >
                  <span className='font-extralight text-[0.7rem]  leading-[24px] tracking-[0.4px] text-white'>
                    {`Upload New Photo`.toUpperCase()}
                  </span>
                </button>
                <button
                  type='button'
                  className='w-max px-[0.87rem] py-1 border-red-300 border shadow-9 bg-white rounded-[6px] flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'
                >
                  <span className='font-extralight text-[0.7rem] leading-[24px] tracking-[0.4px] text-error-3  whitespace-nowrap'>
                    {`reset`.toUpperCase()}
                  </span>
                </button>
              </div>

              <p className='text-[0.6rem] text-gray-400'>
                Allowed JPG, GIF or PNG. Max size of 800K
              </p>
            </div>
          </div>
          <section className='flex flex-col gap-6   '>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <div className='relative'>
                    <label className='absolute top-[-20%] left-2 bg-white rounded-full font-extralight text-secondary-1 text-xs px-1'>
                      Full Name
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
              name='bio'
              render={({ field }) => (
                <FormItem>
                  <div className='relative'>
                    <label className='absolute top-[-20%] left-2 bg-white rounded-full font-extralight text-secondary-1 text-xs px-1'>
                      Bio
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
            onClick={() => setModalOpen(false)}
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
