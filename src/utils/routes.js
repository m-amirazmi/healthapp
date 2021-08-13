import { Clinics } from "../pages/Clinics";

export const routes = [
  {
    path: '/clinics',
    name: 'clinics',
    component: Clinics,
    showOnNav: true,
    isProtected: false
  },
]