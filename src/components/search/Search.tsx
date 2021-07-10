import {PhotoContainer} from "../photoContainer/PhotoContainer";
import {Container, Grid} from "@material-ui/core";
import React from "react";
import {PhotoType} from "../../dal/axios";
import {SearchPhoto} from "./searchPhoto/SearchPhoto";
import {useSelector} from "react-redux";
import {RootStateType} from "../../bll/store";
import {makeStyles} from "@material-ui/core/styles";
import {Paginator} from "./pagination/Pagination";


const useStyles = makeStyles({
    container: {
        marginTop: '5em'
    }
})

export const Search = () => {

    const classes = useStyles();

    const photos = useSelector<RootStateType, Array<PhotoType> | null>(state => state.search.photos)

    return (
        <Container className={classes.container}>
            <SearchPhoto/>
            {photos?.length !== undefined && photos.length > 0 && <Paginator /> }
            <Grid container spacing={4}>
                {photos && photos.map((el, i) => <PhotoContainer key={i} data={el}/>)}
            </Grid>
        </Container>
    )
}