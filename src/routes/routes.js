import config from '~/config';

import { HeaderOnly } from '~/layouts';

// pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';

// Public Routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, Layout: HeaderOnly },
    { path: config.routes.search, component: Search, Layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
