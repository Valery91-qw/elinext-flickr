import React, {useEffect, useState} from 'react';
import './App.css';
import {flickrApi, PhotoType} from './dal/axios';
import {Header} from "./components/header/Header";
import {PhotoContainer} from "./components/photoContainer/PhotoContainer";
import {Container, Grid} from "@material-ui/core";
import {Navigation} from "./components/navigation/Navigation";
import {Routes} from "./routes/Routes";


function App() {

    const [photos, setPhotos] = useState<Array<PhotoType>>()
    const [message, setMessage] = useState('');

    useEffect(() => {
        flickrApi.searchPhoto(message)
            .then(res => setPhotos(res.photos.photo))
    }, [message])


    return (
        <div style={{display: 'flex'}}>
        <Header/>
        <Navigation />
        <Container>
            <Routes setMessage={setMessage}/>
            <Grid container spacing={4}>
                {photos && photos.map((el, i) => <PhotoContainer key={i} data={el}/>)}
            </Grid>
        </Container>
    </div>
    );
}

export default App;
