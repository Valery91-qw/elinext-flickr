import {Redirect, Route, Switch } from "react-router-dom"
import {ImagesContainer} from "../components/imagesContainer/ImagesContainer";
import {useSelector} from "react-redux";
import {RootStateType} from "../bll/store";
import {PhotoType} from "../dal/axios";


export const Routes = () => {

    const photos = useSelector<RootStateType, Array<PhotoType> | null>(state => state.search.photos)
    const bookmarks = useSelector<RootStateType, Array<PhotoType> | null>(state => state.bookmarks.bookmarksPhotos)

    return (
        <Switch>
            <Route exact path="/search" render={() => <ImagesContainer photos={photos} />}/>
            <Route path="/bookmarks" render={() => <ImagesContainer photos={bookmarks}/>}/>
            <Redirect exact from='/' to='/search' />
        </Switch>
    )
}