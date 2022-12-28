import { memo, useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import {
  Card, CardContent, CardMedia, Grid, Typography,
} from '@mui/material';
import BookmarkButton from './bookmarkButton/BookmarkButton';
import TagsField from './tagsField/TagsField';
import TagsArea from './tagsArea/TagsArea';
import {
  addImageToBookmark,
  removeImageToBookmark,
} from '../../../../redux/bookmarks/bookmarks-actions';
import { BookmarkImageType } from '../../../../redux/bookmarks/bookmarks-model';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import setImageUrl from '../../../../utils/set-image-url';

const useStyles = makeStyles()({
  cardMedia: {
    paddingTop: '56.25%',
  },
});

export type ImageContainerPropsType = {
  image: BookmarkImageType
};

function ImageContainer({ image }: ImageContainerPropsType) {
  const inBookmark = useAppSelector(
    (state) => state.bookmarks.bookmarksImages.some(
      (el) => el.id === image.id,
    ),
  );

  const [tags, setTags] = useState<Array<string>>([]);

  const { classes } = useStyles();
  const dispatch = useAppDispatch();

  const addToBookmark = () => {
    dispatch(addImageToBookmark({ photo: image, tags }));
    setTags([]);
  };

  const removeToBookmark = () => {
    dispatch(removeImageToBookmark(image.id));
  };

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card>
        <CardMedia
          className={classes.cardMedia}
          title={image.title}
          image={setImageUrl(image.server, image.id, image.secret)}
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
  );
}
const ImageContainerMemo = memo(ImageContainer);

export default ImageContainerMemo;
