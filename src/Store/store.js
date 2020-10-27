import homeReducer from './Reducers/homeReducer'
import favoritesReducer from './Reducers/favoritesReducer'
import modalReducer from './Reducers/modalReducer'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import loadingReducer from './Reducers/loadingReducer'

const rootReducer = combineReducers({
    home: homeReducer,
    favorites: favoritesReducer,
    modal: modalReducer,
    loading: loadingReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk));
