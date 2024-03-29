import React from 'react'
import { useSelector } from 'react-redux'
import { RootStateType } from '../../../../../redux/store'
import { makeStyles } from 'tss-react/mui'
import { Chip, Grid } from '@mui/material'

const useStyles = makeStyles()({
  wrapper: {
    margin: '0.5em',
  },
})

type TagsAreaPropsType = {
  currentId: string
}

export const TagsArea = ({ currentId }: TagsAreaPropsType) => {
  const { classes } = useStyles()

  const tags = useSelector<RootStateType, Array<string> | undefined>((state) => {
    const im = state.bookmarks.bookmarksImages.find((el) => el.id === currentId)
    if (im) {
      return im.tags
    } else {
      return
    }
  })

  return (
    <Grid data-testid='wrapper' className={classes.wrapper}>
      {tags?.map((el, i) => (
        <Chip key={currentId + i} variant='outlined' size='small' label={el} />
      ))}
    </Grid>
  )
}
