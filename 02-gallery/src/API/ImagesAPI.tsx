
// const id="Hb2DDWjcgFqjPs5ZFnN5yibl5YDqOPZvwEF_A6_YsQU"

//   id is stored inside ".env" file in root  directory
//   process.env  - is object witch stored properties: "REACT_APP"
//   once restart (yarn start) it make virtual object in RUNTIME
//   SEE console.log(process.env)

  const baseURL= `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}&per_page=20`

  export const imagesAPI = {
    getPhotos(searchTxt:string) {

       const promise =  fetch(`${baseURL}&query=${searchTxt}}`)
           .then((res) => {return res.json() })
           .then((data) => { return data.results})
       return promise;
    }
}
