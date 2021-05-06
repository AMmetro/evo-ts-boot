
import {buscetReducer} from '../redux/buscetReducer'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'


export const store = createStore(buscetReducer, applyMiddleware(thunkMiddleware));

export type AppStoreType = ReturnType<typeof buscetReducer>


//@ts-ignore
window.store = store;

// export const y={}
