import {Route, Switch } from "react-router-dom"
import { Search } from "../components/search/Search";


export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <Search />}/>
            <Route />
        </Switch>
    )
}