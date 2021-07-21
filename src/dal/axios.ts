import axios from "axios";
import {API_KEY, REDDIT_API_KEY} from "./variable";
import snoowrap from 'snoowrap'

const apiKey = process.env.REACT_APP_APIKey || API_KEY

export const flickrApi ={
    searchPhoto(searchValue: string | undefined, currentPage: number) {
        return axios.get<ResponseImagesType>('https://www.flickr.com/services/rest/?method=flickr.photos.search',
            {
                params: {
                    name: 'vakriv91',
                    api_key: apiKey,
                    format: 'json',
                    nojsoncallback: '1',
                    text: searchValue,
                    media: 'photos',
                    per_page: '20',
                    page: currentPage,
                    safe_search: '1'
                }
            }).then((res) => res.data)
    },
}

export const redditApi = () => {
    return new snoowrap({
        userAgent: window.navigator.userAgent,
        clientId: REDDIT_API_KEY.KEY,
        clientSecret: REDDIT_API_KEY.SECRET,
        refreshToken: 'fsdfsdfsdfsfsdf'
    })
}

export type ImageType = {
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

export type ResponseImagesType = {
    photos: {
        page: number
        pages: number
        perpage: number
        photo: Array<ImageType>
        total: number
    }
    stat: string
}