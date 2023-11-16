import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/detail/:id': Detail,
  '/favorite': Like,
  '/404': () => {
    console.log('404');
  },
};

export default routes;
