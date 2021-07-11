import {PhotoType} from "../../../dal/axios";
import {Card, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addImageToBookmark} from "../../../bll/bookmarks/bookmarks-reducer";
import {RootStateType} from "../../../bll/store";
import {BookmarkButton} from "./bookmarkButton/BookmarkButton";


const useStyles = makeStyles({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%',
    },

})

type PropsType = {
    image: PhotoType
}

export const PhotoContainer = ({image}: PropsType) => {

    const inBookmark = useSelector<RootStateType, boolean>(state => {
        if (state.bookmarks.bookmarksPhotos.find(el => el.id === image.id)) {
            return true
        } else {
            return false
        }})

    const classes = useStyles();
    const dispatch = useDispatch();

    const addToBookmark = () => {
        dispatch(addImageToBookmark(image))
    };
    const removeToBookmark = () => {

    }

    return (<Grid item xs={12} sm={6} md={3}>
        <Card>
            <CardMedia className={classes.cardMedia}
                       title={image.title}
                       image={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}/>
            <CardContent>
                <Typography>
                    {image.title}
                </Typography>
            </CardContent>
            <BookmarkButton
                inBookmark={inBookmark}
                addToBookmark={addToBookmark}
                removeToBookmark={removeToBookmark}/>
        </Card>
    </Grid>)
}


