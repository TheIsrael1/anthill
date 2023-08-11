import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import * as z from 'zod';
import { cn } from 'lib/utils';
import { Button } from 'components/shadcn/ui/button';
import { Form } from 'components/shadcn/ui/form';
import { Input } from 'components/shadcn/input';
import { toast } from 'components/shadcn/ui/use-toast';
import Icon from 'utils/Icon';
import ListInput from './ListInput';
const FormSchema = z.object({
  items: z.string().min(2, {
    message: 'Please enter a valid course of study.',
  }),
});
interface Iprops {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function AddSkillsForm({ setModalOpen }: Iprops) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const [items, setItems] = useState<string[]>([]);

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
        <section className=' border-t-2 border-b-2 pt-10 pb-[3rem] sm:pb-[4rem] md:pb-[2rem] lg:pb-[9rem] mb-4 sm:mb-4 md:mb-1 lg:mb-1 '>
          <ListInput items={items} setItems={setItems} />
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
