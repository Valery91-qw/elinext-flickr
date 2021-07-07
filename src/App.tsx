import React, {useEffect, useState} from 'react';
import './App.css';
import {flickrApi, PhotoType} from './dal/axios';
import {Header} from "./components/header/Header";
import {Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    container: {
        margin: '1em 0',
        padding: '1em 0'
    }
})

function App() {

    const classes = useStyles()

    const [cphotos, setPhotos] = useState<Array<PhotoType>>()
    useEffect(() => {
        flickrApi.testRequest()
            .then(res => setPhotos(res.photos.photo))
    }, [])


    return (<>
        <Header/>
        <Container className={classes.container}>
            <div>
                {cphotos && cphotos[0].title}
                {cphotos && <img
                    src={`https://live.staticflickr.com/${cphotos[0].server}/${cphotos[0].id}_${cphotos[0].secret}_m.jpg`}/>}

            </div>
        </Container>
    </>)
        ;
}

export default App;
