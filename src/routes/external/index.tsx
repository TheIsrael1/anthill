import CONSTANTS from 'constant';
import HireTalents from 'pages/external/HireTalents';
import About from 'pages/external/about';
import Blogs from 'pages/external/blogs';
import Bts from 'pages/external/bts';
import Faq from 'pages/external/faqs';
import Home from 'pages/external/home';
import Pricing from 'pages/external/pricing';
import PrivacyPolicy from 'pages/external/privacy-policy';
import SingleBlogExternal from 'pages/inner-pages/single-blog-external';
import SingleBtsExternal from 'pages/inner-pages/single-bts-external';
import { routeTypes, routesInterface } from 'types';

const externalRoute: routeTypes = [
  {
    element: <Home />,
    path: '',
    plan: 'starter',
  },
  {
    element: <Pricing />,
    path: 'pricing',
    plan: 'starter',
  },
  {
    element: <Blogs />,
    path: 'blogs',
    plan: 'starter',
  },
  {
    element: <Faq />,
    path: 'faqs',
    plan: 'starter',
  },
  {
    element: <About />,
    path: 'about',
    plan: 'starter',
  },
  {
    element: <Bts />,
    path: 'bts',
    plan: 'starter',
  },
  {
    element: <HireTalents />,
    path: 'hire-talent',
    plan: 'starter',
  },
  {
    element: <PrivacyPolicy />,
    path: 'privacy-policy',
    plan: 'starter',
  },
];

export const innerExternalRoutes: routesInterface<string>[] = [
  { element: <SingleBlogExternal />, path: `${CONSTANTS.ROUTES.blogs}/:id`, plan: `starter` },
  { element: <SingleBtsExternal />, path: `${CONSTANTS.ROUTES.bts}/:id`, plan: `starter` },
];

export default externalRoute;
