import React from 'react';
import {useSelector} from "react-redux";
import {RootStateType} from "../bll/store";
import {Header} from "./components/common/header/Header";
import {makeStyles} from "@material-ui/core/styles";
import {LinearProgress} from "@material-ui/core";
import {RoutesApp} from "./routes/RoutesApp";
import {Navigation} from "./components/common/navigation/Navigation";
import {Footer} from "./components/common/footer/Footer";

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'absolute',
        top: '64px',
        backgroundColor: '#D2F700',
    },
    bar2Indeterminate: {
        backgroundColor: '#A69500'
    },
    bar1Indeterminate: {
        backgroundColor: '#FFBC00'
    }
})

const App = () => {

    const isLoad = useSelector<RootStateType, boolean | undefined>(state => state.process.isLoading)

    const classes = useStyles()


    return (<>
        <Header/>
        {isLoad && <LinearProgress classes={classes}/> }
        <div style={{display: 'flex'}}>
            <Navigation/>
            <RoutesApp/>
        </div>
        <Footer/>
    </>)
}

export default App;
