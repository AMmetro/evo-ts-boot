
export const initialState: number[] =[];


export type actionType = {type: string, payload: number}

export const FavoriteReducer = (state = initialState, action: actionType): number[] => {
 switch (action.type) {
  case "addFavoriteImage": {
      let indexOfId = state.indexOf(action.payload)
      if (indexOfId === -1) {
          const newState=[...state, action.payload]
          return newState
      } else {return state}
  };

     case "removeFavoriteImage": {
         const newState = state.filter(elem => elem !== action.payload )
         return newState
     }

  default: return state;
 }
};


export const addFavoriteAC = (imgId:number) => {return {type: "addFavoriteImage", payload: imgId}};
export const removeFavoriteAC = (imgId:number) => {return {type: "removeFavoriteImage", payload: imgId}};


