import CONSTANTS from 'constant';
import AssetsTemplates from 'pages/app/assets-templates';
import BlogInternal from 'pages/app/blog-internal';
import Bootcamps from 'pages/app/bootcamps';
import Bts from 'pages/app/bts-internal';
import Consultancy from 'pages/app/consultancy';
import CVProfile from 'pages/app/cv-profile';
import Dashboard from 'pages/app/dashboard';
import GeneralForumns from 'pages/app/general-forums';
import MasterClasses from 'pages/app/master-classes';
import OnlineTraining from 'pages/app/online-training';
import ProfessionalForums from 'pages/app/professional-forums';
import ServiceAd from 'pages/app/service-ad';
import Profile from 'pages/app/user-profile';
import SingleBlog from 'pages/inner-pages/single-blog';
import SingleBts from 'pages/inner-pages/single-bts';
import AccountSettings from 'pages/app/account-settings';
import { routeTypes, routesInterface } from 'types';

const internalRoute: routeTypes = [
  {
    element: <AssetsTemplates />,
    path: 'assets-templates',
    plan: 'student',
  },
  {
    element: <Bootcamps />,
    path: 'bootcamps',
    plan: 'student',
  },
  {
    element: <Bts />,
    path: 'bts',
    plan: 'student',
  },
  {
    element: <BlogInternal />,
    path: 'blogs',
    plan: 'student',
  },
  {
    element: <Consultancy />,
    path: 'consultancy',
    plan: 'student',
  },
  {
    element: <CVProfile />,
    path: 'cv-profile',
    plan: 'student',
  },
  {
    element: <Dashboard />,
    path: 'dashboard',
    plan: 'student',
  },
  {
    element: <GeneralForumns />,
    path: 'general-forums',
    plan: 'student',
  },
  {
    element: <MasterClasses />,
    path: 'master-classes',
    plan: 'student',
  },
  {
    element: <OnlineTraining />,
    path: 'online-training',
    plan: 'student',
  },
  {
    element: <ProfessionalForums />,
    path: 'professional-forums',
    plan: 'professional',
  },
  {
    element: <ServiceAd />,
    path: 'service-ad',
    plan: 'professional',
  },
  {
    element: <Profile />,
    path: 'profile',
    plan: 'student',
  },
  {
    element: <AccountSettings/>,
    path: 'settings',
    plan: 'student'
  }
];

export const innerInternalRoutes: routesInterface<string>[] = [
  { element: <SingleBlog />, path: `${CONSTANTS.ROUTES.blogs}/:id`, plan: `starter` },
  { element: <SingleBts />, path: `${CONSTANTS.ROUTES.bts}/:id`, plan: `starter` },
];

export default internalRoute;
