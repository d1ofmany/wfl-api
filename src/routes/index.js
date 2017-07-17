import mealRoute from './meal';
import defaultRoute from './default';

const routes = (app) => {
    mealRoute(app);

    defaultRoute(app);
};

export default routes;
