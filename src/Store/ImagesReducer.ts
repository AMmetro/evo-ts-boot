
export type stateItem = {id:number, img_src: string}

export const initialState:stateItem[] =[];


export type actionType = {type: "addData", payload: stateItem[]}

export const ImagesReducer = (state = initialState, action: actionType): stateItem[] => {
 switch (action.type) {
  case "addData": {
   return state=[...action.payload]
  }
  default: return state;
 }
};



export const addDataAC = (imgData:stateItem[]) => {return {type: "addData", payload: imgData}};


