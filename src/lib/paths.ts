import { UserGroup } from './models/UserGroup';

const paths = {
  home: { path: '/' },
  customer: {
    home: { path: '/customers', userGroups: [UserGroup.Customers] },
    newRequest: { path: '/customers/new-request' },
    requestsList: { path: '/customers/requests' },
    bookings: { path: '/customers/bookings' },
  },
  operations: {
    home: { path: '/operations', userGroups: [UserGroup.Operations] },
  },
};

export default paths;
