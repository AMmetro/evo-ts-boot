export type InitialStateType={loadingStatus: string}
export const initialState:InitialStateType ={loadingStatus: "Photos are not loaded"};


export type actionType = {type: string}

export const LoadStatusReducer = (state = initialState, action: actionType): InitialStateType => {
 switch (action.type) {

  case "setLoadStatus": {
   return state= {loadingStatus: "Load success"}
  }

  case "setLoadingStatus": {
    return state= {loadingStatus: "Loading..."}
   }

  default: return state;
 }
};


export const setLoadingStatusAC = () => { return {type: "setLoadingStatus"} };
export const setLoadStatusAC = () => { return {type: "setLoadStatus"} };


