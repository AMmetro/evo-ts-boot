export type Pizza = {
    name: string;
    price: number;
    _id: string;
}

export type Basket = Array<Pizza >

export type State = {
    pizza: Pizza[];
    basket: Array<Pizza & { count: number;}>;
}
