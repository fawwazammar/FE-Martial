import { Home, Signup, Pasien, Login, Obat, RumahSakit } from '../pages';

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
    path: '/admin/obat',
    component: Obat,
    isPublic: true,
  },
  {
    path: '/admin/rumahsakit',
    component: RumahSakit,
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
