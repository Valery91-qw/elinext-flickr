import {PhotoContainer} from "../photoContainer/PhotoContainer";
import {Grid} from "@material-ui/core";
import React from "react";
import { PhotoType } from "../../dal/axios";
import {SearchPhoto} from "./searchPhoto/SearchPhoto";
import {useSelector} from "react-redux";
import {RootStateType} from "../../bll/store";

export const Search = () => {

    const photos = useSelector<RootStateType, Array<PhotoType> | null>(state => state.search.photos)

    return (<>
        <SearchPhoto />
        <Grid container spacing={4}>
            {photos && photos.map((el, i) => <PhotoContainer key={i} data={el}/>)}
        </Grid>
    </>)
}