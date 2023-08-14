import { TabsContent } from 'components/shadcn/ui/tabs';
import { Button } from 'components/shadcn/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import React from 'react';
import * as z from 'zod';
import { cn } from 'lib/utils';
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

import { format } from 'date-fns';
import { Calendar } from 'components/shadcn/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from 'components/shadcn/ui/popover';
import Icon from 'utils/Icon';
interface Iprops {
  switchTab: (tab: string) => void;
  handleComplete: (tab: string) => void;
  data: string[];
}
const FormSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: 'Please enter a valid email.',
    })
    .email(),
  phone: z.string().min(2, {
    message: 'Please enter a valid Number.',
  }),
  bio: z.string({
    required_error: 'Twitter is required.',
  }),
  linkedin: z.string({
    required_error: ' Linkedin is required.',
  }),
  dob: z.date({
    required_error: 'Date of birth is required.',
  }),
  address: z.string({
    required_error: 'Address is required.',
  }),
});
const InformationTab = ({ switchTab, data: tabData, handleComplete }: Iprops) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const newData = {
      ...data,
      dob: format(data.dob, 'yyyy-MM-dd'),
    };

    switchTab(tabData[1]);
    handleComplete(tabData[0]);

    console.log(newData);

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
    <TabsContent value='Information' className='h-[70vh]   md:mx-8'>
      <div className=' flex flex-col  gap-4   h-full '>
        <div className='flex flex-col my-4 px-1'>
          <h2 className='text-lg'>Information</h2>
          <h3 className='text-xs text-gray-500'>Enter Your personal information</h3>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
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
                      <Input
                        className='placeholder:text-secondary-1 placeholder:text-xs text-secondary-3'
                        placeholder='Short Bio that talks about what you do (I.e Cinematographer & Animator)'
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage className='text-xs mt-1' />
                </FormItem>
              )}
            />
            <section className=' grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6  '>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <div className='relative'>
                      <label className='absolute top-[-20%] left-2 bg-white rounded-full font-extralight text-secondary-1 text-xs px-1'>
                        Email
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
                name='phone'
                render={({ field }) => (
                  <FormItem>
                    <div className='relative'>
                      <label className='absolute top-[-20%] left-2 bg-white rounded-full font-extralight text-secondary-1 text-xs px-1'>
                        Phone Number
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
                name='dob'
                render={({ field }) => (
                  <FormItem className='flex flex-col'>
                    <Popover>
                      <div className='relative'>
                        <label className='absolute top-[-20%] left-2 bg-white rounded-full font-extralight text-secondary-1 text-xs px-1'>
                          Date of Birth
                        </label>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={'outline'}
                              className={cn(
                                'w-full pl-3 text-left font-normal  text-secondary-3',
                                !field.value && 'text-muted-foreground',
                              )}
                            >
                              {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                              <Icon
                                name='calendarIconBlack'
                                svgProp={{
                                  className:
                                    ' cursor-pointer ml-auto h-4 w-4  transition-opacity duration-300 ease-in-out active:opacity-100',
                                }}
                              />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto p-0' align='start'>
                          <Calendar
                            mode='single'
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date: any) =>
                              date > new Date() || date < new Date('1900-01-01')
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </div>
                    </Popover>
                    <FormMessage className='text-xs mt-1' />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='linkedin'
                render={({ field }) => (
                  <FormItem>
                    <div className='relative'>
                      <label className='absolute top-[-20%] left-2 bg-white rounded-full font-extralight text-secondary-1 text-xs px-1'>
                        LinkedIn Profile link
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
            <FormField
              control={form.control}
              name='address'
              render={({ field }) => (
                <FormItem>
                  <div className='relative'>
                    <label className='absolute top-[-20%] left-2 bg-white rounded-full font-extralight text-secondary-1 text-xs px-1'>
                      Address
                    </label>
                    <FormControl>
                      <Input className=' text-secondary-3' {...field} />
                    </FormControl>
                  </div>
                  <FormMessage className='text-xs mt-1' />
                </FormItem>
              )}
            />
            <div className='flex items-center justify-between w-full gap-4'>
              <button
                type='button'
                // disabled={form.formState.isSubmitting}
                disabled={true}
                className='bg-gray-200 disabled:cursor-not-allowed px-4  py-1 rounded-[6px] flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'
              >
                <Icon
                  name='arrowBack'
                  svgProp={{
                    className:
                      'text-gray-400  w-4  cursor-pointer hover:opacity-95 transition-opacity duration-300 ease-in-out active:opacity-100',
                  }}
                />
                <span className='font-[500] text-xs leading-[24px] tracking-[0.4px] text-gray-400 whitespace-nowrap'>
                  {`Previous`.toUpperCase()}
                </span>
              </button>
              <button
                type='submit'
                className='px-3 py-1 bg-primary-1 rounded-[6px] flex items-center justify-center gap-2 group hover:opacity-90 transition-all duration-300 ease-in-out'
              >
                <span className='font-[300] text-xs  leading-[24px] tracking-[0.4px] text-white'>
                  {`Save and Continue`.toUpperCase()}
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

export default InformationTab;
