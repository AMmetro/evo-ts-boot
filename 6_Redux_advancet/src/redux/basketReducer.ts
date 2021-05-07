import {Pizza, Basket} from '../types'
export const initialBusketState:Basket =[];

export const basketReducer = (state = initialBusketState, action: any): Basket => {
    switch (action.type) {
        case "plusPizzaBucket": {
        return state=[...state, action.payload]
        }

        // case "plusPizzaBucket": {
        //     const copyBacket = [...state, {...action.payload, count:1}]
        //        return state = copyBacket
        //     }

        case "minusPizzaBucket": {
            const copyBacket = [...state]
            const indexPizza = copyBacket.findIndex( (item:any) => item._id === action.payload );
            if (indexPizza !== -1) {
                copyBacket.splice(indexPizza, 1)
                return state = copyBacket
            }
            return state = copyBacket
        }
        default: return state;
    }
};


type PizzaBucket = {type: string, payload: Pizza};
export const plusPizzaBucketAC = (p:Pizza) => {return {type: "plusPizzaBucket", payload: p}};
export const minusPizzaBucketAC = (_id:string) => {return {type: "minusPizzaBucket", payload: _id}};


