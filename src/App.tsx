import React, {useEffect, useState} from 'react';
import './App.css';
import {flickrApi, PhotoType} from './dal/axios';
import {Header} from "./components/header/Header";
import {makeStyles} from "@material-ui/core/styles";
import {PhotoContainer} from "./components/photoContainer/PhotoContainer";
import {Container, Grid} from "@material-ui/core";
import {Navigation} from "./components/navigation/Navigation";
import {Routes} from "./routes/Routes";



const useStyles = makeStyles({
    nav: {
        position: 'absolute',
        top: '5em',
    }
})

function App() {

    const classes = useStyles()

    const [photos, setPhotos] = useState<Array<PhotoType>>()
    const [message, setMessage] = useState('');

    useEffect(() => {
        flickrApi.searchPhoto(message)
            .then(res => setPhotos(res.photos.photo))
    }, [message])


    return (<>
            <Header/>
            <Container>
                <Routes setMessage={setMessage} />
                <Grid container>
                    {photos && photos.map((el, i) => <PhotoContainer key={i} data={el}/>)}
                </Grid>
            </Container>
            <Navigation nav={classes.nav}/>
    </>)
        ;
}

export default App;
