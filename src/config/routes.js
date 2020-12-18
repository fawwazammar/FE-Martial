import { Home, Signup, Pasien, Login, Admin } from '../pages';

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
    path: '/admin',
    component: Admin,
    isPublic: false,
  },
  {
    path: '/pasien',
    component: Pasien,
    isPublic: false,
  },
  {
    path: '/',
    component: Home,
    isPublic: false,
  },
];

export default routes;
