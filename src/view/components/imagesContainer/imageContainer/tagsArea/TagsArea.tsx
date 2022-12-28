import { makeStyles } from 'tss-react/mui';
import { Chip, Grid } from '@mui/material';
import { useAppSelector } from '../../../../../redux/hooks';

const useStyles = makeStyles()({
  wrapper: {
    margin: '0.5em',
  },
});

type TagsAreaPropsType = {
  currentId: string
};

export default function TagsArea({ currentId }: TagsAreaPropsType) {
  const { classes } = useStyles();

  const tags = useAppSelector((state) => {
    const im = state.bookmarks.bookmarksImages.find((el) => el.id === currentId);
    if (im) {
      return im.tags;
    }
    return undefined;
  });

  return (
    <Grid data-testid="wrapper" className={classes.wrapper}>
      {tags?.map((el) => (
        <Chip key={currentId + el} variant="outlined" size="small" label={el} />
      ))}
    </Grid>
  );
}
