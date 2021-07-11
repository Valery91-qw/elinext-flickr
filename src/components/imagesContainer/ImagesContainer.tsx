import {Container, Grid} from "@material-ui/core";
import React from "react";
import {PhotoType} from "../../dal/axios";
import {makeStyles} from "@material-ui/core/styles";
import {PaginationContainer} from "./pagination/PaginationContainer";
import {SearchField } from "../search/searchField/SearchField";
import {useLocation } from 'react-router-dom'
import {PhotoContainer} from "../search/photoContainer/PhotoContainer";


const useStyles = makeStyles({
    container: {
        marginTop: '5em'
    }
})

type PropsType = {
    photos: Array<PhotoType> | null
}

export const ImagesContainer = ({photos}: PropsType) => {


    const location = useLocation();
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            {location.pathname === '/search' && <SearchField/>}
            {
                photos?.length !== undefined &&
                photos.length > 19 &&
                location.pathname === '/search' &&
                <PaginationContainer />
            }
            <Grid container spacing={4}>
                {photos && photos.map((el, i) => <PhotoContainer key={i} image={el}/>)}
            </Grid>
        </Container>
    )
}