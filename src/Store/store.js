import homeReducer from './Reducers/homeReducer'
import favoritesReducer from './Reducers/favoritesReducer'
import navigationBarReducer from './Reducers/navigationBarReducer'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    home: homeReducer,
    favorites: favoritesReducer,
    navigation: navigationBarReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk));
