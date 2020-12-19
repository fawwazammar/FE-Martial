import {
  Home,
  Signup,
  Pasien,
  Login,
  Obat,
  RumahSakit,
  Dokter,
  Transaction,
} from '../pages';

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
    path: '/dokter',
    component: Dokter,
    isPublic: true,
  },
  {
    path: '/obat',
    component: Obat,
    isPublic: false,
  },
  {
    path: '/rumahsakit',
    component: RumahSakit,
    isPublic: true,
  },
  {
    path: '/transaksi',
    component: Transaction,
    isPublic: true,
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
