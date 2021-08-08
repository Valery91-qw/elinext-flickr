import {Container, Grid, Typography} from "@material-ui/core";
import React from "react";
import {ImageType} from "../../../dal/axios";
import {makeStyles} from "@material-ui/core/styles";
import {PaginationContainer} from "./pagination/PaginationContainer";
import {SearchField } from "./searchField/SearchField";
import {useLocation } from 'react-router-dom'
import {ImageContainer} from "./imageContainer/ImageContainer";

const useStyles = makeStyles({
    container: {
        marginTop: '5em'
    },
    text: {
        fontWeight: 'bold',
        color: '#A69500',
    }
})

export type ImagesContainerPropsType = {
    images: Array<ImageType> | null
}

export const ImagesContainer = ({images}: ImagesContainerPropsType) => {

    const location = useLocation();
    const classes = useStyles();

    return ( <>
        <Container className={classes.container}>
            {
                location.pathname === '/search' && <SearchField/>
            }
            {
                images?.length !== undefined &&
                images.length > 19 &&
                location.pathname === '/search' && <PaginationContainer />
            }
            {
                location.pathname === '/bookmarks' || images?.length !== 0
                    ? <Grid container spacing={4}>
                        {images && images.map((el, i) => <ImageContainer key={i} image={el}/>)}
                      </Grid>
                    : <Typography className={classes.text}>No images here.Would you try to search for anything else ?</Typography>
            }

        </Container>
    </>)
}