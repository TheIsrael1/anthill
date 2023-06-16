import Login from 'pages/onboarding/Login';
import SelectPlan from 'pages/onboarding/SelectPlan';
import SignUp from 'pages/onboarding/SignUp';
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
];

export default checkOutRoutes;
