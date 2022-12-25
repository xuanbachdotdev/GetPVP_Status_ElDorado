import config from '../config';

// Layouts
import { DefaultLayout } from '../layouts/index';
// Pages
import Home from '../pages/Home/Home';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
