import { Home, Signup, Pasien, Login } from '../pages';

const routes = [
  {
    path: '/login',
    component: Login,
    isPublic: true,
  },
  {
    path: '/signup',
    component: Signup,
    isPublic: true,
  },
  {
    path: '/pasien',
    component: Pasien,
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
