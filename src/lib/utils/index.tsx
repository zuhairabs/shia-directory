import { Image } from '@chakra-ui/react';

import DashboardIcon from '../assets/img/dashboard.png';
import PeopleIcon from '../assets/img/people.png';
// import SettingsIcon from '../assets/img/settings.png';
import UserIcon from '../assets/img/user.png';

export const sidebar = [
  {
    id: 1,
    title: 'Dashboard',
    icon: () => (
      <Image
        filter="invert(1)"
        src={DashboardIcon}
        width="20px"
        height="20px"
      />
    ),
    route: '/',
  },
  {
    id: 2,
    title: 'Directory',
    icon: () => (
      <Image filter="invert(1)" src={PeopleIcon} width="24px" height="24px" />
    ),
    route: '/people',
  },
  {
    id: 3,
    title: 'Profile',
    icon: () => (
      <Image filter="invert(1)" src={UserIcon} width="22px" height="22px" />
    ),
    route: '/profile',
  },
  // {
  //   id: 4,
  //   title: 'Settings',
  //   icon: () => (
  //     <Image filter="invert(1)" src={SettingsIcon} width="22px" height="22px" />
  //   ),
  //   route: '/settings',
  // },
];

export const BarLabels = [
  {
    id: 1,
    text: 'Yes',
    // eslint-disable-next-line sonarjs/no-duplicate-string
    bg: 'linear-gradient(90deg, hsla(150, 58%, 50%, 1) 0%, hsla(150, 58%, 30%, 1) 100%)',
  },
  {
    id: 2,
    text: 'Only for Religious',
    // eslint-disable-next-line sonarjs/no-duplicate-string
    bg: 'linear-gradient(90deg, hsla(199, 100%, 50%, 1) 0%, hsla(199, 100%, 30%, 1) 100%)',
  },
  {
    id: 3,
    text: 'No',
    // eslint-disable-next-line sonarjs/no-duplicate-string
    bg: 'linear-gradient(90deg, hsla(47, 100%, 40%, 1) 0%, hsla(47, 100%, 30%, 1) 100%)',
  },
];

export const KPILabels = [
  {
    id: 1,
    text: 'Developer',
    bg: 'linear-gradient(90deg, hsla(150, 58%, 50%, 1) 0%, hsla(150, 58%, 30%, 1) 100%)',
  },
  {
    id: 2,
    text: 'Designer',
    bg: 'linear-gradient(90deg, hsla(199, 100%, 50%, 1) 0%, hsla(199, 100%, 30%, 1) 100%)',
  },
  {
    id: 3,
    text: 'Manager',
    bg: 'linear-gradient(90deg, hsla(47, 100%, 40%, 1) 0%, hsla(47, 100%, 30%, 1) 100%)',
  },
];

export const KPIData = [
  {
    id: 1,
    name: 'Developer',
    bg: 'linear-gradient(90deg, hsla(150, 58%, 50%, 1) 0%, hsla(150, 58%, 30%, 1) 100%)',
    percentage: 60,
    top: '-3%',
    left: 0,
  },
  {
    id: 2,
    name: 'Designer',
    bg: 'linear-gradient(90deg, hsla(199, 100%, 50%, 1) 0%, hsla(199, 100%, 30%, 1) 100%)',
    percentage: 30,
    top: '-5%',
    left: '30%',
  },
  {
    id: 3,
    name: 'Manager',
    bg: 'linear-gradient(90deg, hsla(47, 100%, 40%, 1) 0%, hsla(47, 100%, 30%, 1) 100%)',
    percentage: 10,
    top: '10%',
    left: '50%',
  },
];

export const metrics = [
  {
    id: 1,
    title: 'Total Members',
    value: '21K',
  },
  {
    id: 2,
    title: 'Total Professions',
    value: '10',
  },
  {
    id: 3,
    title: 'Available for projects',
    value: '15K',
  },
  {
    id: 4,
    title: 'Total Locations',
    value: '200',
  },
];

export const calculateSize = (percentage: number) => {
  const maxPercentage = 100;
  const actualPercentage = Math.min(percentage, maxPercentage);
  const width = (actualPercentage / maxPercentage) * 120;
  const height = width; // Assuming a square bubble, adjust as needed
  return { width, height };
};

export type KPIDataType = typeof KPIData;
export type BarLabelsType = typeof BarLabels;
