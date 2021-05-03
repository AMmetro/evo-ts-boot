
type initStateType = {number: number};
type Action = { type: string, payload: number }

const initState:initStateType = {number: 0};

export const reducer = (state=initState, action: Action) => {

    switch (action.type) {

        case 'UPDATE_BALANCE':
            return {number: action.payload}

        case 'CREDIT1':
            return {number:state.number - action.payload}

        case 'CREDIT2':
             return {number:state.number - action.payload}

        case 'SET_BALANCE_WITH_TAX':
             return {number:state.number - state.number * action.payload /100}

        case 'DEBIT':
             return {number:state.number + action.payload}

        default:
            return state
    }

}

export const updateBalanceAC = () => ({type: 'UPDATE_BALANCE', payload: 1000.0})
export const credit1AC = () => ({type: 'CREDIT1', payload: 200.0})
export const credit2AC = () => ({type: 'CREDIT2', payload: 100.0})
export const setBalanceAC = () => ({type: 'SET_BALANCE_WITH_TAX', payload: 14.0})
export const debitAC = () => ({type: 'DEBIT', payload: 250})

