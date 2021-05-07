import React from "react";
import {Pizza} from "../types";
import {getPizza} from "../services/api";
import * as R from "ramda";
//----------------my import---------------------
import {useDispatch, useSelector} from 'react-redux'
import {minusPizzaBucketAC, plusPizzaBucketAC} from "../redux/basketReducer";
import {AppStoreType} from '../redux/store'
import {Basket} from '../types'
import {setPizzaAC} from '../redux/pizzaReducer'


export function useApp() {

    //--------Redux-----------------------------------------------------------
    // const [pizza, setPizza] =  React.useState<Pizza[]>([]);
    // const [backet, setBacket] = React.useState<Pizza[]>([]);
    const backet=useSelector<AppStoreType,Basket>(state=>state.basket)
    const pizza=useSelector<AppStoreType,Basket>(state=>state.pizza)
    const dispatch=useDispatch()
    //---------------------------------------------------------------

    React.useEffect(() => { getPizza()
            .then(pizza => {
               dispatch(setPizzaAC(pizza.items))
                // setPizza(pizza.items)
            });
        }, []);


    const plusPizzaBucket = React.useCallback((_id: string) => {
        const p = pizza.filter(x => x._id === _id)[0];
        // setBacket([...backet, p]);
        // redux
        dispatch(plusPizzaBucketAC(p))
    }, [pizza, backet]);

    const minusPizzaBucket = React.useCallback((_id: string) => {
        const idx = R.findLastIndex((x: Pizza) => x._id === _id)(backet);

        if (idx !== -1) {
            // redux
            //  setBacket(R.remove(idx, 1, backet))
            dispatch(minusPizzaBucketAC(_id))
            }
    }, [backet]);

    const validBasket = R.compose(
        R.values,
        R.mapObjIndexed((value: Pizza[]) => {
            return value.reduce((acc, p) => {
                return {
                    ...p,
                    price: acc.price + p.price,
                    count: acc.count + 1,
                };
            }, { count: 0, price: 0 });
        }),
        R.groupBy((x: Pizza) => x._id),
    )(backet);

    return {
        totalPrice: validBasket
            .reduce((acc, p: Pizza) =>
                acc + p.price, 0),
        pizza,
        bucket: validBasket,
        plusPizzaBucket,
        minusPizzaBucket,
    };
}
