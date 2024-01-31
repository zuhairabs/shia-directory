import React from 'react';
import type { PathRouteProps } from 'react-router-dom';

import People from '~/lib/pages/people';
import Profile from '~/lib/pages/profile';

const Home = React.lazy(() => import('~/lib/pages/home'));

export const routes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/people',
    element: <People />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
