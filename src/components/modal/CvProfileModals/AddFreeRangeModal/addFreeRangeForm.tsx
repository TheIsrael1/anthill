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
  currency: z.string({
    required_error: 'currency is required.',
  }),
  startPrice: z.string({
    required_error: 'start price is required.',
  }),
  endPrice: z.string({
    required_error: 'end price is required.',
  }),
});
interface Iprops {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function AddRangeForm({ setModalOpen }: Iprops) {
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
        <section className=' gap-6 border-t-2 border-b-2 pt-10 pb-[3rem] sm:pb-[4rem] md:pb-[2rem] lg:pb-[8rem] mb-4 sm:mb-4 md:mb-1 lg:mb-1 '>
          <FormField
            control={form.control}
            name='currency'
            render={({ field }) => (
              <FormItem>
                <div className='relative'>
                  <label className='absolute top-[-20%] left-2 bg-white rounded-full font-extralight text-secondary-1 text-xs px-1'>
                    Currency
                  </label>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className='w-full text-secondary-3'>
                        <SelectValue placeholder='Select currency from list' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='naira'>
                        <span className='text-secondary-3'>₦ Naira</span>
                      </SelectItem>
                      <SelectItem value='dollar'>
                        <span className='text-secondary-3'>$ Dollar</span>
                      </SelectItem>
                      <SelectItem value='euro'>
                        <span className='text-secondary-3'>€ Euro </span>
                      </SelectItem>
                      <SelectItem value='pound'>
                        <span className='text-secondary-3'> £ Pound </span>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <FormMessage className='text-xs mt-1' />
              </FormItem>
            )}
          />

          <section className='grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 mt-8'>
            <FormField
              control={form.control}
              name='startPrice'
              render={({ field }) => (
                <FormItem>
                  <div className='relative'>
                    <label className='absolute top-[-20%] left-2 bg-white rounded-full font-extralight text-secondary-1 text-xs px-1'>
                      Start Price
                    </label>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder='$ 000'
                        className='placeholder:text-primary-9/[0.38] w-full  border-gray-300 rounded-md p-2 py-4 pl-3 text-secondary-3 w-full'
                      />
                    </FormControl>
                  </div>
                  <FormMessage className='text-xs mt-1' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='endPrice'
              render={({ field }) => (
                <FormItem>
                  <div className='relative'>
                    <label className='absolute top-[-20%] left-2 bg-white rounded-full font-extralight text-secondary-1 text-xs px-1'>
                      End Price
                    </label>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder='$ 000'
                        className='placeholder:text-primary-9/[0.38] w-full  border-gray-300 rounded-md p-2 py-4 pl-3 text-secondary-3 w-full'
                      />
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
