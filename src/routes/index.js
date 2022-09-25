import routesConfig from '~/config/routes';

import { HeaderOnly } from '~/component/Layout';

// pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Public Routes
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, Layout: HeaderOnly },
    { path: routesConfig.search, component: Search, Layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
