import React from 'react';
import {Header} from "./components/common/header/Header";
import {Navigation} from "./components/common/navigation/Navigation";
import {Routes} from "./routes/Routes";
import {Footer} from "./components/common/footer/Footer";


const App = () => {

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
