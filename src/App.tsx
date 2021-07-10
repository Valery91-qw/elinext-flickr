import React, {useEffect} from 'react';
import {Header} from "./components/header/Header";
import {Container} from "@material-ui/core";
import {Navigation} from "./components/navigation/Navigation";
import {Routes} from "./routes/Routes";
import {Footer} from "./components/footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./bll/store";
import {getPhotos} from "./bll/search-reducer";


function App() {

    const searchValue = useSelector<RootStateType, string | null>(state => state.search.searchValue)
    const dispatch = useDispatch();

    useEffect(() => {
        if(searchValue === null || searchValue === '') {
            return
        }
        console.log(searchValue)
            dispatch(getPhotos(searchValue))
    }, [dispatch, searchValue])


    return (<>
        <Header/>
        <div style={{display: 'flex'}}>
            <Navigation/>
            <Container>
                <Routes />
            </Container>
        </div>
        <Footer />
   </> );
}

export default App;
