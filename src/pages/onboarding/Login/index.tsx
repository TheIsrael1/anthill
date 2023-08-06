import { LazyLoadImage } from 'react-lazy-load-image-component';
import rocketBoy from 'assets/image/rocketBoy.png?format=webp&w=700&h=669.86&imagetools';
import Icon from 'utils/Icon';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Input } from 'components/shadcn/input';
import { Label } from 'components/shadcn/label';
import { Checkbox } from 'components/shadcn/checkbox';
import CONSTANTS from 'constant';
import { useEffect, useState } from 'react';
import { Dialog, DialogContent } from 'components/shadcn/dialog';
import { useMutation } from '@tanstack/react-query';
import customerService from 'services/customer';
import { customerLoginFormInterface, customerLoginFormSchema } from './login.model';
import { processError } from 'helper/error';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputErrorWrapper from 'components/Hocs/InputError';
import BtnLoader from 'components/Hocs/BtnLoader';
import { authDetailsInterface } from 'types';
import useStore from 'store';

const Login = () => {
  const navigate = useNavigate();
  const [emailVerifiedOpen, setEmailVerifiedOpen] = useState(false);
  const { setAuthDetails } = useStore((store) => store);

  const [params] = useSearchParams();

  const email_verfied = params.get('email');

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<customerLoginFormInterface>({
    resolver: zodResolver(customerLoginFormSchema),
    mode: 'all',
  });

  const { mutate, isLoading } = useMutation<authDetailsInterface, any, customerLoginFormInterface>({
    mutationFn: ({ email, password }) =>
      customerService.customerLogin({
        organization_id: import.meta.env.VITE_TIMBU_ORG_ID,
        email,
        password,
        app_url: `${import.meta.env.VITE_BASE_URL}/login?email=${email}`,
      }),
    onSuccess: (data) => {
      setAuthDetails(data);
      navigate(`/${CONSTANTS.ROUTES['select-plan']}`);
    },
    onError: (err) => {
      processError(err);
    },
  });

  const onSubmit: SubmitHandler<customerLoginFormInterface> = (data) => {
    mutate(data);
  };

  useEffect(() => {
    if (email_verfied) {
      setEmailVerifiedOpen(true);
    }
  }, []);

  return (
    <div className='flex items-center w-full h-full'>
      <Dialog open={emailVerifiedOpen} onOpenChange={setEmailVerifiedOpen}>
        <DialogContent className='h-screen bg-white sm:h-max sm:w-[80vw] lg:w-[50vw] !max-w-[1120px]'>
          <div className='w-full h-full md:max-w-[30rem] mx-auto pt-[6.56rem] pb-[5.31rem] flex flex-col  gap-[1.5rem]'>
            <div
              className='flex items-center cursor-pointer mb-[2.125rem]'
              onClick={() => navigate(`/`)}
            >
              <Icon name='nfmLogo' svgProp={{ width: 40, height: 40 }} />
              <h4 className='font-[700] text-[22px] whitespace-nowrap   md:text-[28px] leading-[24px] tracking-[0.15px] text-primary-9/[0.87]'>
                Nollywood Filmmaker.com
              </h4>
            </div>
            <div className='flex flex-col w-full mb-[1.5rem]'>
              <h5 className='text-primary-9/[0.87] font-inter text-[24px] leading-[32px] font-[700] tracking-[0.18px]'>
                Email Verified ✉️
              </h5>
              <p className='text-primary-9/[0.60] leading-[24px] tracking-[0.15px]'>
                Your email hase been verified, you can now continue to login.
              </p>
            </div>
            <button
              onClick={() => setEmailVerifiedOpen(false)}
              className='w-full py-2 text-white bg-primary-1 shadow-3 rounded-[8px] font-[500] text-[15px] hover:opacity-90 transition-opacity duration-300 ease-in-out mb-[1.75rem]'
            >
              <span className='leading-[0.46px]'>Continue</span>
            </button>
          </div>
        </DialogContent>
      </Dialog>
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
            className='flex items-center cursor-pointer mb-[2.125rem]'
            onClick={() => navigate(`/`)}
          >
            <Icon name='nfmLogo' svgProp={{ width: 40, height: 40 }} />
            <h4 className='font-[700] text-[22px] whitespace-nowrap   md:text-[28px] leading-[24px] tracking-[0.15px] text-primary-9/[0.87]'>
              Nollywood Filmmaker.com
            </h4>
          </div>
          <div className='flex flex-col w-full mb-[1.5rem]'>
            <h5 className='text-primary-9/[0.87] font-inter text-[24px] leading-[32px] font-[700] tracking-[0.18px]'>
              Welcome! 👋🏻
            </h5>
            <p className='text-primary-9/[0.60] leading-[24px] tracking-[0.15px]'>
              Please Log-in to your account
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col items-start justify-center w-full mx-auto'
          >
            <div className='flex flex-col w-full gap-4 mb-[1.25rem]'>
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
                  className='w-full placeholder:text-primary-9/[0.38]'
                  placeholder='Password'
                />
              </InputErrorWrapper>
              <button
                onClick={() => navigate(`/${CONSTANTS.ROUTES['forgot-password']}`)}
                className='place-self-end text-primary-1 text-[14px] leading-[21px] tracking-[0.15px] cursor-pointer hover:underline'
              >
                Forgot Password?
              </button>
            </div>
            <div className='flex items-center justify-center gap-[0.75rem] w-full mb-[1.75rem]'>
              <Checkbox
                className='border-primary-9/[0.38] data-[state=checked]:bg-primary-1 checked:!bg-primary-1'
                id='Remember Me'
              />
              <Label
                htmlFor='Remember Me'
                className='text-[14px] leading-[21px] tracking-[0.15px] text-primary-9/[0.38]'
              >
                Remember Me
              </Label>
            </div>
            <button
              onClick={() => trigger()}
              className='w-full py-2 text-white bg-primary-1 shadow-3 rounded-[8px] font-[500] text-[15px] hover:opacity-90 transition-opacity duration-300 ease-in-out mb-[1.75rem]'
            >
              <BtnLoader isLoading={isLoading}>
                <span className='leading-[0.46px]'>LOGIN</span>
              </BtnLoader>
            </button>
          </form>

          <p className='text-center leading-[24px] tracking-[0.15px] text-primary-9/[0.87] mx-auto mb-8'>
            New here?{' '}
            <button
              className='cursor-pointer text-primary-1 hover:underline'
              onClick={() => navigate(`/${CONSTANTS.ROUTES['create-account']}`)}
            >
              {' '}
              Create an account{' '}
            </button>
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
            {/* wrap with button and boop effect */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
