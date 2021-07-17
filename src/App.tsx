import React from 'react';
import {Header} from "./components/common/header/Header";
import {Navigation} from "./components/common/navigation/Navigation";
import {Routes} from "./routes/Routes";
import {Footer} from "./components/common/footer/Footer";
import {LinearProgress} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useSelector} from "react-redux";
import {RootStateType} from "./bll/store";

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
            <Routes/>
        </div>
        <Footer/>
    </>)
}

export default App;
