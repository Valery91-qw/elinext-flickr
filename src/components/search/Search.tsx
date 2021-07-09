import {PhotoContainer} from "../photoContainer/PhotoContainer";
import {Grid} from "@material-ui/core";
import React from "react";
import { PhotoType } from "../../dal/axios";
import {SearchPhoto} from "./searchPhoto/SearchPhoto";

export const Search = (props: any) => {
    return (<>
        <SearchPhoto setMessage={props.setMessage}/>
        <Grid container spacing={4}>
            {props.photos && props.photos.map((el: PhotoType, i: React.Key | null | undefined) => <PhotoContainer key={i} data={el}/>)}
        </Grid>
    </>)
}