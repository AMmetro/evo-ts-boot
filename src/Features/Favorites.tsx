import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../Store/State";
import "./marsGallery.css";
import {stateItem} from '../Store/ImagesReducer'
import Heart from './Heart'
import {removeFavoriteAC} from "../Store/FavoriteReducer";


function Favorites() {

    const FavoriteImg = useSelector<AppStoreType, number[]>(state => state.Favorite)
    const Images = useSelector<AppStoreType, stateItem[]>(state => state.Images)
    const dispatch=useDispatch()

    let Result = FavoriteImg.map((currentFavImageId) => {
        return Images.find(currentImage => currentImage.id === currentFavImageId)
    })


    const onHeartClick=(id:number)=>{
        dispatch(removeFavoriteAC(id))
    }

    return (
        <div>

            {Result.length === 0
                ? <div> No favourites photos, add some! </div>
                : <div className={"image_container"}>
                    {Result.map(elem => {
                        return (
                            <div key={elem!.id}>
                                <Heart onHeartClick={onHeartClick} id={elem!.id}/>
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
