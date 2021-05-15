import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/',
    params: {
        api_key: `${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`
    }
})

export const API = {
    getPhotos(numberOfSoul:number) {
        const promise = instance.get<any>(`photos?sol=${numberOfSoul}`);
        return promise;
    }
}


