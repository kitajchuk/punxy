import {
  New,
  Top,
  Ask,
  Best,
  Show,
  Jobs,
  Info,
} from '../pages';

const routes = [
  {
    path: '/',
    label: 'new',
    Component: New,
  },
  {
    path: '/top',
    label: 'top',
    Component: Top,
  },
  {
    path: '/best',
    label: 'best',
    Component: Best,
  },
  {
    path: '/ask',
    label: 'ask',
    Component: Ask,
  },
  {
    path: '/show',
    label: 'show',
    Component: Show,
  },
  {
    path: '/jobs',
    label: 'jobs',
    Component: Jobs,
  },
  {
    path: '/info',
    label: 'info',
    Component: Info,
  },
];

export default routes;
