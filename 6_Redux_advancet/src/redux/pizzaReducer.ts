
import {Pizza, Basket} from '../../src/types'
export const initialPizzaState:Basket =[];

export const pizzaReducer = (state = initialPizzaState, action:any): any => {
    
    
    switch (action.type) {
        case "setPizza": {                   
                      return state= [...state, ...action.payload]
            }    
        }
        return state
};


export const setPizzaAC = (p:Pizza[]) => {return {type: "setPizza", payload: p}};


   // dispatch(setPizzaAC(pizza.items))


