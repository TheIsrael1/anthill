import { AxiosError } from 'axios';
import toast from 'helper';
// import { apiReturnInterface } from 'types';

export const processError = (err: any) => {
  const error = err as AxiosError<any>;
  if (error?.response?.data?.message) {
    toast.error(error?.response?.data?.message);
  } else {
    toast.error(error?.message || `An error occurred`);
  }
};
