import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  loadMenuRequest: null,
  loadMenuSuccess: ['categories'],
  loadMenuFailure: null,
});

export const MenuTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  categories: [],
});

/* Reducers */

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_MENU_SUCCESS]: (state, { categories }) => state.merge({ categories }),
});
