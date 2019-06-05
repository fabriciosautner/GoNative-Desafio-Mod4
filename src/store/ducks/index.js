import { combineReducers } from 'redux';

import { reducer as menu } from './menu';
import { reducer as products } from './products';

export default combineReducers({
  menu,
  products,
});
