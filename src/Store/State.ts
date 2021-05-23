
import {ImagesReducer} from './ImagesReducer'
import {LoadStatusReducer} from './LoadStatusReducer'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import { FavoriteReducer } from './FavoriteReducer'
import thunkMiddleware from 'redux-thunk'


export const rootReducer=combineReducers({
    Images: ImagesReducer,
    Status: LoadStatusReducer,
    Favorite: FavoriteReducer })
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppStoreType = ReturnType<typeof rootReducer>


//@ts-ignore
window.store = store;




