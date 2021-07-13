import {Chip, Grid} from "@material-ui/core";
import React from "react";
import {useSelector} from "react-redux";
import {RootStateType} from "../../../../bll/store";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles({
    wrapper: {
        margin: '0.5em',
    }
})

type TagsAreaPropsType = {
    currentId: string
}

export const TagsArea = ({currentId}: TagsAreaPropsType) => {

    const classes = useStyles()

    const tags = useSelector<RootStateType, Array<string> | undefined>(state => {
        let im = state.bookmarks.bookmarksImages.find(el => el.id === currentId)
        if (im) {
            return im.tags
        } else {
            return undefined
        }
    })

    return (
        <Grid className={classes.wrapper}>
            {tags?.map((el, i) => <Chip key={currentId + i} variant='outlined' size='small' label={el}/>)}
        </Grid>
    )
}