export type InitialStateType={loadingStatus: string}
export const initialState:InitialStateType ={loadingStatus: "Photos are not loaded"};


export type actionType = {type: string, payload:number}

export const LoadStatusReducer = (state = initialState, action: actionType): InitialStateType => {
 switch (action.type) {

  case "setLoadStatus": {
    if (action.payload === 0 ) {return state= {loadingStatus: "No photos for this sol"}}
    else { return state= {loadingStatus: "Load success"} }
  }

  case "setLoadingStatus": {
    return state= {loadingStatus: "Loading..."}
   }

  default: return state;
 }
};


export const setLoadingStatusAC = () => { return {type: "setLoadingStatus"} };
export const setLoadStatusAC = (length:number) => { return {type: "setLoadStatus", payload: length} };


