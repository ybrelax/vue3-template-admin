import { AppRouteModule } from '../types';

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  children: [
    {
      name: 'analysis',
      name: 'Analysis'
    }
  ]
};

export default dashboard;
