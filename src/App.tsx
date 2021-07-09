import React, {useEffect, useState} from 'react';
import './App.css';
import {flickrApi, PhotoType} from './dal/axios';
import {Header} from "./components/header/Header";
import {Container} from "@material-ui/core";
import {Navigation} from "./components/navigation/Navigation";
import {Routes} from "./routes/Routes";
import {Footer} from "./components/footer/Footer";


function App() {


    const [photos, setPhotos] = useState<Array<PhotoType>>()
    const [message, setMessage] = useState('');

    useEffect(() => {
        debugger
        flickrApi.searchPhoto(message)
            .then(res => setPhotos(res.photos.photo))
    }, [message])


    return (<>
        <Header/>
        <div style={{display: 'flex'}}>
            <Navigation/>
            <Container>
                <Routes setMessage={setMessage} photos={photos}/>
            </Container>
        </div>
        <Footer />
   </> );
}

export default App;
