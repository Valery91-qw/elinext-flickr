import { makeStyles } from 'tss-react/mui'
import { Button, CardActions, Typography } from '@mui/material'

const useStyles = makeStyles()({
  button: {
    backgroundColor: '#E7FF73',
    color: '#89A600',
    padding: '.5em',
    '&:hover': {
      backgroundColor: '#89A600',
      color: '#E7FF73',
    },
  },
})

type BookmarkButtonPropsType = {
  inBookmark: boolean
  addToBookmark: () => void
  removeToBookmark: () => void
}

export default function BookmarkButton({
  inBookmark,
  addToBookmark,
  removeToBookmark,
}: BookmarkButtonPropsType) {
  const { classes } = useStyles()

  if (inBookmark) {
    return (
      <CardActions>
        <Button onClick={removeToBookmark} className={classes.button} size='small'>
          <Typography>remove!</Typography>
        </Button>
      </CardActions>
    )
  }

  return (
    <CardActions>
      <Button onClick={addToBookmark} className={classes.button} size='small'>
        <Typography>bookmark it!</Typography>
      </Button>
    </CardActions>
  )
}
