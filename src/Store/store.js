import homeReducer from './Reducers/homeReducer'
import favoritesReducer from './Reducers/favoritesReducer'
import searchReducer from './Reducers/searchReducer'
import modalReducer from './Reducers/modalReducer'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import loadingReducer from './Reducers/loadingReducer'

const rootReducer = combineReducers({
    home: homeReducer,
    favorites: favoritesReducer,
    search: searchReducer,
    modal: modalReducer,
    loading: loadingReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk));
