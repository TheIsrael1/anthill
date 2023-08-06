import { SignUpInterface } from 'pages/onboarding/SignUp/signUp.model';
import API from '../index';
import { customerLoginInterface } from 'pages/onboarding/Login/login.model';

const createCustomer = async (params: SignUpInterface) => {
  const { data } = await API.post(`/customers`, {
    ...params,
  });
  return data;
};

const customerLogin = async (params: customerLoginInterface) => {
  const { data } = await API.post(`/auth/customer-login`, {
    ...params,
  });
  return data;
};

const customerService = { createCustomer, customerLogin };

export default customerService;
