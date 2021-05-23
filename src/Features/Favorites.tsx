import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../Store/State";
import "./marsGallery.css";
import Heart from './Heart'
import {removeFavoriteAC} from "../Store/FavoriteReducer";
import {ImgPropsType} from "../Features/PhotosPage"


function Favorites() {

    const FavoriteImg = useSelector<AppStoreType, ImgPropsType[]>(state => state.Favorite)
    const dispatch=useDispatch()

    const onHeartClick=(imgProps:ImgPropsType)=>{
        dispatch(removeFavoriteAC(imgProps))
    }

    return (
        <div>

            {FavoriteImg.length === 0
                ? <div> No favourites photos, add some! </div>
                : <div className={"image_container"}>

                    {  FavoriteImg.map(elem => {
                        return (
                            <div key={elem!.id}>
                                <Heart onHeartClick={onHeartClick} imgProps={elem}/>
                                <img key={elem!.id}
                                className={"image_item"}
                                src={`${elem!.img_src}`}
                                alt={"click for favorite"}  />
                            </div>
                        )
                    })
                    }
                </div>
            }

        </div>
    )

}

export default Favorites;
