import axios from "axios";


export const flickrApi ={
    searchPhoto(searchData: string) {
        return axios.get<RequestPhotosType>('https://www.flickr.com/services/rest/?method=flickr.photos.search',
            {
                params: {
                    name: "vakriv91",
                    api_key: "ad8358d5b731d6b1e27b6f28fc6682df",
                    format: "json",
                    nojsoncallback: "1",
                    text: searchData,
                    media: "photos",
                    per_page: "20",
                }
            }).then(res => res.data)
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

export type RequestPhotosType = {
    photos: {
        page: number
        pages: number
        perpage: number
        photo: Array<PhotoType>
        total: number
    }
    stat: string
}