import { SignUpInterface } from 'pages/onboarding/SignUp/signUp.model';
import API from '../index';

const createCustomer = async (params: SignUpInterface) => {
  const { data } = await API.post(`/customers`, {
    ...params,
  });
  return data;
};

const customerService = { createCustomer };

export default customerService;
