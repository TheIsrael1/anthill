import { LazyLoadImage } from 'react-lazy-load-image-component';
import rocketBoy from 'assets/image/rocketBoy.png?format=webp&w=700&h=669.86&imagetools';
import Icon from 'utils/Icon';
import { useNavigate } from 'react-router-dom';
import { Input } from 'components/shadcn/input';
import { Label } from 'components/shadcn/label';
import { Checkbox } from 'components/shadcn/checkbox';
import CONSTANTS from 'constant';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpFormInterface, SignUpFormSchema } from './signUp.model';
import InputErrorWrapper from 'components/Hocs/InputError';
import { DevTool } from '@hookform/devtools';
import { useMutation } from '@tanstack/react-query';
import { processError } from 'helper/error';
import customerService from 'services/customer';
import BtnLoader from 'components/Hocs/BtnLoader';
import { customerLoginInterface } from '../Login/login.model';
import { useEffect } from 'react';

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    trigger,
    control,
    formState: { errors },
  } = useForm<SignUpFormInterface>({
    resolver: zodResolver(SignUpFormSchema),
    mode: 'all',
  });

  const { mutate, isLoading } = useMutation<any, any, SignUpFormInterface>({
    mutationFn: ({ first_name, last_name, email, password }) =>
      customerService.createCustomer({
        first_name,
        last_name,
        email,
        organization_id: import.meta.env.VITE_TIMBU_ORG_ID,
        contact_infos: [
          {
            contact_data: `${email}`,
            contact_type: 'email',
          },
        ],
        password,
      }),
    onSuccess: (_, variables) => {
      doLoginAttempt({
        email: `${variables?.email}`,
        app_url: `${import.meta.env.VITE_BASE_URL}/login?email=${variables?.email}`,
        organization_id: import.meta.env.VITE_TIMBU_ORG_ID,
        password: `${variables?.password}`,
      });
      navigate(`/${CONSTANTS.ROUTES['verify-email']}`);
    },
    onError: (err) => {
      processError(err);
    },
  });

  const { mutate: doLoginAttempt } = useMutation<any, any, customerLoginInterface>({
    mutationFn: (params) =>
      customerService.customerLogin({
        ...params,
      }),
  });

  const onSubmit: SubmitHandler<SignUpFormInterface> = (data) => {
    mutate(data);
  };

  return (
    <div className='flex items-center w-full h-full'>
      <div className='items-center justify-center hidden h-full overflow-hidden   md:flex bg-primary-15 xl:min-w-[850px] flex-grow-0 flex-shrink-1 basis-auto'>
        <div className='min-w-[700px] min-h-[669.86px] transition-all ease-in-out duration-300'>
          <LazyLoadImage
            className='w-full h-full bg-current'
            src={rocketBoy}
            effect='blur'
            alt=''
          />
        </div>
      </div>
      <div className='w-full md:max-w-[calc(96px+494px)] mx-auto bg-white px-4 md:px-[3rem]'>
        <div className='flex flex-col items-start justify-center w-full mx-auto'>
          <div
            className='flex items-center  cursor-pointer mb-[2.125rem]'
            onClick={() => navigate(`/`)}
          >
            <Icon name='nfmLogo' svgProp={{ width: 40, height: 40 }} />{' '}
            <h4 className='font-[700] text-[22px] whitespace-nowrap  md:text-[28px] leading-[24px] tracking-[0.15px] text-primary-9/[0.87]'>
              Nollywood Filmmaker.com
            </h4>
          </div>
          <div className='flex flex-col w-full mb-[1.5rem]'>
            <h5 className='text-primary-9/[0.87] font-inter text-[24px] leading-[32px] font-[700] tracking-[0.18px]'>
              Create an Account! 🚀
            </h5>
            <p className='text-primary-9/[0.60] leading-[24px] tracking-[0.15px]'>
              Make your experience in the filmmaking industry easy and fun!{' '}
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col items-start justify-center w-full mx-auto'
          >
            <div className='flex flex-col w-full gap-4 mb-[1.25rem]'>
              <InputErrorWrapper error={errors?.first_name?.message}>
                <Input
                  {...register('first_name')}
                  className='w-full placeholder:text-primary-9/[0.38]'
                  placeholder='First name'
                />
              </InputErrorWrapper>
              <InputErrorWrapper error={errors?.last_name?.message}>
                <Input
                  {...register('last_name')}
                  className='w-full placeholder:text-primary-9/[0.38]'
                  placeholder='Last name'
                />
              </InputErrorWrapper>
              <InputErrorWrapper error={errors?.email?.message}>
                <Input
                  {...register('email')}
                  className='w-full placeholder:text-primary-9/[0.38]'
                  placeholder='Email'
                />
              </InputErrorWrapper>
              <InputErrorWrapper error={errors?.password?.message}>
                <Input
                  {...register('password')}
                  className='w-full placeholder:text-primary-9/[0.38] !ring-0 !border-slate-200'
                  placeholder='Password'
                  type='password'
                />
              </InputErrorWrapper>
              {/* <Input className='w-full placeholder:text-primary-9/[0.38]' placeholder='Password' /> */}
            </div>
            <div className='flex items-center justify-center gap-[0.75rem] w-full mb-[1.75rem]'>
              <Checkbox
                className='border-primary-9/[0.38] data-[state=checked]:bg-primary-1 checked:!bg-primary-1 data-[state=checked]:!text-white checked:!text-white'
                id='Remember Me'
              />
              <Label
                htmlFor='Remember Me'
                className='text-[14px] leading-[21px] tracking-[0.15px] text-primary-9/[0.38]'
              >
                I agree to the Nollywood Filmmaker{''}
                <span
                  onClick={() => navigate(`/${CONSTANTS.ROUTES['privacy-policy']}`)}
                  className='text-primary-1 hover:underline cursor-pointer'
                >
                  {' '}
                  Privacy Policy
                </span>
              </Label>
            </div>
            <button
              onClick={() => trigger()}
              type='submit'
              className='w-full py-2 text-white bg-primary-1 shadow-3 rounded-[8px] font-[500] text-[15px] hover:opacity-90 transition-opacity duration-300 ease-in-out mb-[1.75rem]'
            >
              <BtnLoader isLoading={isLoading}>
                <span className='leading-[0.46px]'>SIGN UP</span>
              </BtnLoader>
            </button>
          </form>
          <DevTool control={control} />
          <p className='text-center leading-[24px] tracking-[0.15px] text-primary-9/[0.87] mx-auto mb-8'>
            Already have an account?
            <span
              className='cursor-pointer text-primary-1 hover:underline'
              onClick={() => navigate(`/${CONSTANTS.ROUTES['login']}`)}
            >
              {' '}
              Sign in instead
            </span>
          </p>
          <div className='relative flex items-center w-full gap-2 mb-[2.5rem]'>
            <div className='flex-grow border-b border-b-primary-9/[0.12] mt-1' />
            <span className='eading-[24px] tracking-[0.15px] text-primary-9/[0.87]'>or</span>
            <div className='flex-grow border-b border-b-primary-9/[0.12] mt-1' />
          </div>
          <div className='w-full flex justify-center items-center gap-[1.5rem]'>
            <Icon name='facebook' />
            <Icon name='twitter' />
            <Icon name='google' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
