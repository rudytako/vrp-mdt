import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Pages

// Components

const Buttons = Loader(
  lazy(() => import('src/content/pages/Components/Buttons'))
);
const Modals = Loader(
  lazy(() => import('src/content/pages/Components/Modals'))
);
const Accordions = Loader(
  lazy(() => import('src/content/pages/Components/Accordions'))
);
const Tabs = Loader(lazy(() => import('src/content/pages/Components/Tabs')));
const Badges = Loader(
  lazy(() => import('src/content/pages/Components/Badges'))
);
const Tooltips = Loader(
  lazy(() => import('src/content/pages/Components/Tooltips'))
);
const Avatars = Loader(
  lazy(() => import('src/content/pages/Components/Avatars'))
);
const Cards = Loader(lazy(() => import('src/content/pages/Components/Cards')));
const Forms = Loader(lazy(() => import('src/content/pages/Components/Forms')));

// Status

const Status404 = Loader(
  lazy(() => import('src/content/pages/Status/Status404'))
);

const CAD = Loader(lazy(() => import('src/content/cad/CAD')));
const Civilian = Loader(lazy(() => import('src/content/dashboards/Civilian')));
const ViewCivilian = Loader(
  lazy(() => import('src/content/dashboards/Civilian/ViewCivilian'))
);

const Vehicle = Loader(lazy(() => import('src/content/dashboards/Vehicle')));
const ViewVehicle = Loader(
  lazy(() => import('src/content/dashboards/Vehicle/ViewVehicle'))
);

const Property = Loader(lazy(() => import('src/content/dashboards/Property')));
const ViewProperty = Loader(
  lazy(() => import('src/content/dashboards/Property/ViewProperty'))
);

const Login = Loader(lazy(() => import('src/content/auth/Login')));
const Register = Loader(lazy(() => import('src/content/auth/Register')));

const RaportCreate = Loader(
  lazy(() => import('src/content/dashboards/Raport/CreateReport/index'))
);

const RaportList = Loader(
  lazy(() => import('src/content/dashboards/Raport/index'))
);

const PrivateRoute = Loader(lazy(() => import('src/PrivateRoute')));

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '*',
        element: <Status404 />
      }
    ]
  },
  {
    path: 'cad',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: /**<PrivateRoute component={<CAD/>} /> */ <CAD />
      }
    ]
  },
  {
    path: 'login',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: <Login />
      }
    ]
  },
  {
    path: 'register',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: <Register />
      }
    ]
  },
  {
    path: 'dashboards',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="/cad" replace />
      },
      {
        path: 'civilian',
        element: <Civilian />
      },
      {
        path: 'viewCivilian/:id',
        element: <ViewCivilian />
      },
      {
        path: 'vehicle',
        element: <Vehicle />
      },
      {
        path: 'viewVehicle/:id',
        element: <ViewVehicle />
      },
      {
        path: 'properties',
        element: <Property />
      },
      {
        path: 'viewProperty/:id',
        element: <ViewProperty />
      }
    ]
  },
  {
    path: 'raports',
    element: <SidebarLayout />,
    children: [
      {
        path: 'create',
        element: <RaportCreate />
      },
      {
        path: '',
        element: <RaportList />
      }
    ]
  },
  {
    path: 'management',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="transactions" replace />
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            element: <Navigate to="details" replace />
          }
        ]
      }
    ]
  },
  {
    path: '/components',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="buttons" replace />
      },
      {
        path: 'buttons',
        element: <Buttons />
      },
      {
        path: 'modals',
        element: <Modals />
      },
      {
        path: 'accordions',
        element: <Accordions />
      },
      {
        path: 'tabs',
        element: <Tabs />
      },
      {
        path: 'badges',
        element: <Badges />
      },
      {
        path: 'tooltips',
        element: <Tooltips />
      },
      {
        path: 'avatars',
        element: <Avatars />
      },
      {
        path: 'cards',
        element: <Cards />
      },
      {
        path: 'forms',
        element: <Forms />
      }
    ]
  }
];

export default routes;
