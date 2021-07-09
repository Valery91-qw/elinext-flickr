import {Route, Switch } from "react-router-dom"
import {SearchPhoto} from "../components/searchPhoto/SearchPhoto";


export const Routes = (props: any) => {
    return (
        <Switch>
            <Route exact path="/" render={() => <SearchPhoto setMessage={props.setMessage} />}/>
            <Route />
        </Switch>
    )
}