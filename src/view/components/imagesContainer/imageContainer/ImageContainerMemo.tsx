import React, { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootStateType } from '../../../../bll/store'
import { BookmarkButton } from './bookmarkButton/BookmarkButton'
import { TagsField } from './tagsField/TagsField'
import { TagsArea } from './tagsArea/TagsArea'
import {
  addImageToBookmark,
  removeImageToBookmark,
} from '../../../../bll/bookmarks/bookmarks-actions'
import { BookmarkImageType } from '../../../../bll/bookmarks/bookmarks-model'
import { makeStyles } from 'tss-react/mui'
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { useAppDispatch } from '../../../../bll/hooks'

const useStyles = makeStyles()({
  cardMedia: {
    paddingTop: '56.25%',
  },
})

export type ImageContainerPropsType = {
  image: BookmarkImageType
}

export const ImageContainerMemo = memo(function ImageContainer({ image }: ImageContainerPropsType) {
  const inBookmark = useSelector<RootStateType, boolean>((state) => {
    return !!state.bookmarks.bookmarksImages.find((el) => el.id === image.id)
  })

  const [tags, setTags] = useState<Array<string>>([])

  const { classes } = useStyles()
  const dispatch = useAppDispatch()

  const addToBookmark = () => {
    dispatch(addImageToBookmark({ photo: image, tags }))
    setTags([])
  }

  const removeToBookmark = () => {
    dispatch(removeImageToBookmark(image.id))
  }

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card>
        <CardMedia
          className={classes.cardMedia}
          title={image.title}
          image={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
        />
        <CardContent>
          <Typography>{image.title}</Typography>
        </CardContent>
        <BookmarkButton
          inBookmark={inBookmark}
          addToBookmark={addToBookmark}
          removeToBookmark={removeToBookmark}
        />
        {inBookmark ? <TagsArea currentId={image.id} /> : <TagsField setTags={setTags} />}
      </Card>
    </Grid>
  )
})
