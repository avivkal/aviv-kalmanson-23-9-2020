import reducer from './Reducers/reducer'
import { createStore } from 'redux';

export const store = createStore(reducer);
