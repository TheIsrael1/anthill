import ForgotPassword from 'pages/onboarding/ForgotPassword';
import Login from 'pages/onboarding/Login';
import ResetPassword from 'pages/onboarding/ResetPassword';
import SelectPlan from 'pages/onboarding/SelectPlan';
import SignUp from 'pages/onboarding/SignUp';
import VerifyEmail from 'pages/onboarding/VerifyEmail';
import { routeTypes } from 'types';

const checkOutRoutes: routeTypes = [
  {
    element: <Login />,
    path: 'login',
    plan: 'starter',
  },
  {
    element: <SignUp />,
    path: 'create-account',
    plan: 'starter',
  },
  {
    element: <SelectPlan />,
    path: 'select-plan',
    plan: 'starter',
  },
  {
    element: <ForgotPassword />,
    path: 'forgot-password',
    plan: 'starter',
  },
  {
    element: <ResetPassword />,
    path: 'reset-password',
    plan: 'starter',
  },
  {
    element: <VerifyEmail />,
    path: 'verify-email',
    plan: 'starter',
  },
];

export default checkOutRoutes;
