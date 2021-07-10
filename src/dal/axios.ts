import axios from "axios";
import {API_KEY} from "./variable";


export const flickrApi ={
    searchPhoto(searchData: string | undefined, currentPage: number) {
        return axios.get<ResponsePhotosType>('https://www.flickr.com/services/rest/?method=flickr.photos.search',
            {
                params: {
                    name: "vakriv91",
                    api_key: API_KEY,
                    format: "json",
                    nojsoncallback: "1",
                    text: searchData,
                    media: "photos",
                    per_page: "20",
                    page: currentPage,
                    safe_search: "1"
                }
            }).then(res => res.data )
    },
}


export type PhotoType = {
    farm: number
    id: string
    isfamily: number
    isfriend: number
    ispublic: number
    owner: string
    secret: string
    server: string
    title: string
    url: string
}

export type ResponsePhotosType = {
    photos: {
        page: number
        pages: number
        perpage: number
        photo: Array<PhotoType>
        total: number
    }
    stat: string
}