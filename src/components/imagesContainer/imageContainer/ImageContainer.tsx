import {Card, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    addBookmarkTags,
    addImageToBookmark, BookmarkImageType,
    removeImageToBookmark
} from "../../../bll/bookmarks-reducer/bookmarks-reducer";
import {RootStateType} from "../../../bll/store";
import {BookmarkButton} from "./bookmarkButton/BookmarkButton";
import {TagsField} from "./tagsField/TagsField";
import {TagsArea} from "./tagsArea/TagsArea";


const useStyles = makeStyles({
    cardMedia: {
        paddingTop: '56.25%',
    },

})

export type ImageContainerPropsType = {
    image: BookmarkImageType
}

export const ImageContainer =({image}: ImageContainerPropsType) => {

    const inBookmark = useSelector<RootStateType, boolean>(state => {
        return !!state.bookmarks.bookmarksImages.find(el => el.id === image.id);
    })

    const [tags, setTags] = useState<Array<string>>([])

    const classes = useStyles()
    const dispatch = useDispatch()

    const addToBookmark = () => {
        dispatch(addImageToBookmark(image))

        dispatch(addBookmarkTags(image.id, tags))
    }

    const removeToBookmark = () => {
        dispatch(removeImageToBookmark(image.id))
    }

    return (
        <Grid item xs={12} sm={6} md={3}>
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
                {
                    inBookmark
                        ? <TagsArea currentId={image.id}/>
                        : <TagsField setTags={setTags}/>
                }
            </Card>
        </Grid>
    )
}


