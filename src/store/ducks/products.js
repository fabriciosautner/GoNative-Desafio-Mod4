import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  loadProductsRequest: ['idCategory'],
  loadProductsSuccess: ['products'],
  loadProductsFailure: null,
  setCurrentCategory: ['id'],
});

export const ProductsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  currentCategory: null,
});

/* Reducers */

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_PRODUCTS_SUCCESS]: (state, { products }) => state.merge({ data: products.products, currentCategory: products.id }),
});
