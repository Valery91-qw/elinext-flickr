import {Redirect, Route, Switch } from "react-router-dom"
import {ImagesContainer} from "../components/imagesContainer/ImagesContainer";
import {useSelector} from "react-redux";
import {RootStateType} from "../bll/store";
import {ImageType} from "../dal/axios";


export const Routes = () => {

    const images = useSelector<RootStateType, Array<ImageType> | null>(state => state.search.images)
    const bookmarks = useSelector<RootStateType, Array<ImageType> | null>(state => state.bookmarks.bookmarksImages)

    return (
        <Switch>
            <Route exact path='/search' render={() => <ImagesContainer images={images} />}/>
            <Route path='/bookmarks' render={() => <ImagesContainer images={bookmarks}/>}/>
            <Redirect exact from='/' to='/search' />
        </Switch>
    )
}