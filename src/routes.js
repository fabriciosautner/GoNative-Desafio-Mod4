import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Cart from './pages/Cart';
// import Product from './pages/Product';

const Routes = createAppContainer(
  createBottomTabNavigator({
    Main,
    Cart,
  }),
);

export default Routes;
