import { useLocation } from 'react-router-dom'
import { makeStyles } from 'tss-react/mui'
import { Container, Grid, Typography } from '@mui/material'
import { ImageType } from '../../../dal/axios'
import PaginationContainer from './pagination/PaginationContainer'
import SearchFieldMemo from './searchField/SearchFieldMemo'
import ImageContainerMemo from './imageContainer/ImageContainerMemo'
import { useAppSelector } from '../../../redux/hooks'
import routerEnum from '../../router/routerEnum'

const useStyles = makeStyles()({
  container: {
    marginTop: '5em',
  },
  text: {
    fontWeight: 'bold',
    color: '#A69500',
  },
})

export default function ImagesContainer() {
  const location = useLocation()
  const { classes } = useStyles()

  const images: Array<ImageType> | null = useAppSelector((state) =>
    location.pathname === routerEnum.SEARCH ? state.search.images : state.bookmarks.bookmarksImages,
  )

  const pagesAmount: number | undefined = useAppSelector((state) => state.search.pagination?.pages)

  return (
    <Container className={classes.container}>
      {location.pathname === routerEnum.SEARCH && <SearchFieldMemo />}
      {pagesAmount && location.pathname === routerEnum.SEARCH && <PaginationContainer />}
      {location.pathname === routerEnum.BOOKMARKS || images?.length !== 0 ? (
        <Grid container spacing={4}>
          {images && images.map((el) => <ImageContainerMemo key={el.id} image={el} />)}
        </Grid>
      ) : (
        <Typography className={classes.text}>
          No images here.Would you try to search for anything else ?
        </Typography>
      )}
    </Container>
  )
}
