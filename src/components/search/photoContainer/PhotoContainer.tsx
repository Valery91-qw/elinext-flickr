import {PhotoType} from "../../../dal/axios";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import {useDispatch} from "react-redux";
import {addPhotoToBookmark} from "../../../bll/bookmarks/bookmarks-reducer";

const useStyles = makeStyles({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%',
    },
    button: {
        backgroundColor: '#E7FF73',
        color: '#89A600',
        padding: '.5em',
        "&:hover": {
            backgroundColor: '#89A600',
            color: '#E7FF73'
        }
    }
})

type PropsType = {
    data: PhotoType
}

export const PhotoContainer = (props: PropsType) => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const addPhoto = () => {
        dispatch(addPhotoToBookmark(props.data))
    }

    return (<Grid item xs={12} sm={6} md={3}>
        <Card>
            <CardMedia className={classes.cardMedia}
                       title={props.data.title}
                       image={`https://live.staticflickr.com/${props.data.server}/${props.data.id}_${props.data.secret}_m.jpg`}/>
            <CardContent>
                <Typography>
                    {props.data.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={addPhoto} className={classes.button} size='small'>
                    <Typography>In bookmark</Typography>
                </Button>
            </CardActions>
        </Card>
    </Grid>)
}