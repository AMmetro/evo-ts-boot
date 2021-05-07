
import {basketReducer} from './basketReducer'
import {pizzaReducer} from '../redux/pizzaReducer'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'


export const rootReducer=combineReducers ({
    basket: basketReducer,
    pizza: pizzaReducer 
})


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppStoreType = ReturnType<typeof rootReducer>
// export type AppStoreType = ReturnType<typeof bascetReducer>


//@ts-ignore
window.store = store;

// export const y={}
