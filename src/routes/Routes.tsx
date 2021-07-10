import {Redirect, Route, Switch } from "react-router-dom"
import { Search } from "../components/search/Search";
import {Bookmarks} from "../components/bookmarks/Bookmarks";


export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/search" render={() => <Search />}/>
            <Route path="/bookmarks" render={() => <Bookmarks />}/>
            <Redirect exact from='/' to='/search' />
        </Switch>
    )
}