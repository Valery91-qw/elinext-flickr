import { ChangeEvent } from 'react'
import { makeStyles } from 'tss-react/mui'
import { TextField } from '@mui/material'

const useStyles = makeStyles()({
  wrapper: {
    margin: '0.5em',
  },
})

export type TagsFieldPropsType = {
  setTags: (tags: Array<string>) => void
}

export const TagsField = ({ setTags }: TagsFieldPropsType) => {
  const { classes } = useStyles()

  const onTagsHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setTags(event.target.value.trim().split(/[\s,]+/))
  }

  return (
    <TextField
      className={classes.wrapper}
      placeholder='Some tags ?'
      size='small'
      variant='outlined'
      onChange={onTagsHandler}
    />
  )
}
