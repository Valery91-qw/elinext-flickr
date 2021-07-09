import {Route, Switch } from "react-router-dom"
import { Search } from "../components/search/Search";


export const Routes = (props: any) => {
    return (
        <Switch>
            <Route exact path="/" render={() => <Search setMessage={props.setMessage} photos={props.photos}/>}/>
            <Route />
        </Switch>
    )
}