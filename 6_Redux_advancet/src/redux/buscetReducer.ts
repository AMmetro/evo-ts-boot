import {Pizza, Basket} from '../../src/types'
export const initialBuscetState:Basket =[];

export const buscetReducer = (state = initialBuscetState, action: PizzaBucket): Basket => {
    switch (action.type) {
        case "plusPizzaBucket": {
        const copyBacket = [...state]
              copyBacket.push(action.payload)
         return state = copyBacket
        }

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

// export const x={}
