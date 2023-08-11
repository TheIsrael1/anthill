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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'components/shadcn/ui/select';
import { format } from 'date-fns';
import { Calendar } from 'components/shadcn/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from 'components/shadcn/ui/popover';
import Icon from 'utils/Icon';
const FormSchema = z.object({
  role: z.string().min(2, {
    message: 'Please enter a valid role.',
  }),
  placeOfWork: z.string().min(2, {
    message: 'Please enter a valid Place of Work.',
  }),
  jobMode: z.string({
    required_error: 'Job Mode is required.',
  }),
  startDate: z.date({
    required_error: 'Start date is required.',
  }),
  endDate: z.date({
    required_error: 'End date is required.',
  }),
});
interface Iprops {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function AddExperienceForm({ setModalOpen }: Iprops) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const newData = {
      ...data,
      startDate: format(data.startDate, 'yyyy-MM-dd'),
      endDate: format(data.endDate, 'yyyy-MM-dd'),
    };
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
        <section className=' border-t-2 border-b-2 pt-10 pb-[3rem] sm:pb-[4rem] md:pb-[2rem] lg:pb-[4rem] mb-4 sm:mb-4 md:mb-1 lg:mb-1 '>
          <FormField
            control={form.control}
            name='placeOfWork'
            render={({ field }) => (
              <FormItem>
                <div className='relative'>
                  <label className='absolute top-[-20%] left-2 bg-white rounded-full font-extralight text-secondary-1 text-xs px-1'>
                    Place of Work
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
              name='jobMode'
              render={({ field }) => (
                <FormItem>
                  <div className='relative'>
                    <label className='absolute top-[-20%] left-2 bg-white rounded-full font-extralight text-secondary-1 text-xs px-1'>
                      Job Mode
                    </label>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className='w-full text-secondary-3'>
                          <SelectValue placeholder='Contract' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='internship'>Internship</SelectItem>
                        <SelectItem value='Full Time'>Full Time</SelectItem>
                        <SelectItem value='Part Time'>Part Time</SelectItem>
                        <SelectItem value='Contract'>Contract</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <FormMessage className='text-xs mt-1' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='startDate'
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <Popover>
                    <div className='relative'>
                      <label className='absolute top-[-20%] left-2 bg-white rounded-full font-extralight text-secondary-1 text-xs px-1'>
                        Start Date
                      </label>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-[240px] md:w-full pl-3 text-left font-normal  text-secondary-3',
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
              name='endDate'
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <Popover>
                    <div className='relative'>
                      <label className='absolute top-[-20%] left-2 bg-white rounded-full font-extralight text-secondary-1 text-xs px-1'>
                        End Date
                      </label>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-[240px] md:w-full pl-3 text-left font-normal text-secondary-3',
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
