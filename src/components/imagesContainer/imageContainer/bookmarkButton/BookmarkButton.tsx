import {Button, CardActions, Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
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

export type PropsType = {
    inBookmark: boolean
    addToBookmark: () => void
    removeToBookmark: () => void
}

export const BookmarkButton = ({ inBookmark, addToBookmark, removeToBookmark} : PropsType) => {

    const classes = useStyles()

    return (<>
        {inBookmark
            ? <CardActions>
                <Button onClick={removeToBookmark} className={classes.button} size='small'>
                    <Typography>remove!</Typography>
                </Button>
            </CardActions>
            : <CardActions>
                <Button onClick={addToBookmark} className={classes.button} size='small'>
                    <Typography>bookmark it!</Typography>
                </Button>
            </CardActions>
        }
    </>)
}