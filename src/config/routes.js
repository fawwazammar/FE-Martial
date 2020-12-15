import { Home, Signup, Pasien } from '../pages';

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
  {
    path: '/pasien',
    component: Pasien,
    isPublic: true,
  },
];

export default routes;
