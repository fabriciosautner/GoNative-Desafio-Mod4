import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import Main from '~/pages/Main';
import Cart from './pages/Cart';
import ProductScreen from './pages/Product';

const HomeStack = createStackNavigator(
  {
    Home: Main,
    Product: ProductScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const Routes = createAppContainer(
  createBottomTabNavigator({
    HomeStack,
    Cart,
  }),
);

export default Routes;
