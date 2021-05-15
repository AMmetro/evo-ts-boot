import React, {createRef, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import {API} from "../API/Api";
import {setLoadStatusAC, setLoadingStatusAC} from '../Store/LoadStatusReducer'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../Store/State";
import {stateItem} from "../Store/ImagesReducer"
import {InitialStateType} from "../Store/LoadStatusReducer"
import {addDataAC} from "../Store/ImagesReducer";
import "./marsGallery.css"
import Heart from "./Heart";
import {addFavoriteAC} from "../Store/FavoriteReducer";


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type InputRefType = DefaultInputPropsType & { current: any };


function PhotosPage() {

    const inputRef: InputRefType = createRef();

    const Images=useSelector<AppStoreType, stateItem[]>(state => state.Images)
    const Status=useSelector<AppStoreType, InitialStateType>(state => state.Status)
    const dispatch=useDispatch()


    const clickHandler = () => {
        dispatch(setLoadingStatusAC())
        API.getPhotos(inputRef.current.value)
            .then((res) =>{
                dispatch(addDataAC(res.data.photos))
                dispatch(setLoadStatusAC())
            })
            .catch((res) => console.log(res))
    }


    const onHeartClick=(id:number)=>{
     dispatch(addFavoriteAC(id))
    }


    return (
        <div>

            <div> Select Sol and press "load"!</div>

            <div>
                <input ref={inputRef}/>
                <button onClick={clickHandler}>load</button>
            </div>

            <div> {Status.loadingStatus}</div>

            {Images.length === 0
                ? null
                : <div className={"image_container"}>
                    { Images.map(elem => {return (
                            <div key={elem.id}>
                                <Heart onHeartClick={onHeartClick} id={elem.id}/>
                                <img key={elem.id}
                                 className={"image_item"}
                                 src={`${elem.img_src}`}
                                 alt={"click for favorite"}  />
                            </div>
                        ) } ) }
                </div> }

        </div>
    );
}

export default PhotosPage;
