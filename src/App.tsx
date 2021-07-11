import React, {useEffect} from 'react';
import {Header} from "./components/common/header/Header";
import {Navigation} from "./components/common/navigation/Navigation";
import {Routes} from "./routes/Routes";
import {Footer} from "./components/common/footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./bll/store";
import {getPhotos} from "./bll/search-reducer";


const App = () => {

    const searchValue = useSelector<RootStateType, string | undefined>(state => state.search.searchValue)
    const dispatch = useDispatch()

    useEffect(() => {
        if (searchValue === undefined || searchValue === '') {
            return
        }
        dispatch(getPhotos(searchValue))
    }, [dispatch, searchValue])


    return (<>
        <Header/>
        <div style={{display: 'flex'}}>
            <Navigation/>
            <Routes/>
        </div>
        <Footer/>
    </>)
}

export default App;
