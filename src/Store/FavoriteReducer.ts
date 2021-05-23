
import {ImgPropsType} from "../Features/PhotosPage"
import {useDispatch} from "react-redux";

export const initialState: ImgPropsType[] =[];

export type actionType = {type: string, payload: ImgPropsType}



export const FavoriteReducer = (state = initialState, action: actionType): ImgPropsType[] => {

 switch (action.type) {
  case "addFavoriteImage": {
      const isImgSame = state.filter (elem => elem.id === action.payload.id)
      if (isImgSame.length === 0) { return state=[...state, action.payload] }
      else {
          const newState = state.filter(elem => elem.id !== action.payload.id )
          return newState
      }
      return state
  };


     case "removeFavoriteImage": {
         const newState = state.filter(elem => elem.id !== action.payload.id )
         return newState
     }

  default: return state;
 }
};


export const addFavoriteAC = (imgProps:ImgPropsType) => {return {type: "addFavoriteImage", payload: imgProps}};
export const removeFavoriteAC = (imgProps:ImgPropsType) => {return {type: "removeFavoriteImage", payload: imgProps}};


