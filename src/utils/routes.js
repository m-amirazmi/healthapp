import { ClinicDetails } from "../pages/ClinicDetails/ClinicDetails";
import { Clinics } from "../pages/Clinics/Clinics";

export const routes = [
  {
    path: '/clinics',
    name: 'clinics',
    component: Clinics,
    showOnNav: true,
    isProtected: false
  },
  {
    path: '/clinics/:id',
    name: 'clinic details',
    component: ClinicDetails,
    showOnNav: false,
    isProtected: false
  },
]