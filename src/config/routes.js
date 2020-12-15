import { Home, Signup } from '../pages';

const routes = [
  {
    path: '/signup',
    component: Signup,
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    isPublic: false,
  },
];

export default routes;
