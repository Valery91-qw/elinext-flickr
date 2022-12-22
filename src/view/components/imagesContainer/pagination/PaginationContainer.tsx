import { makeStyles } from 'tss-react/mui'
import { Container, Pagination } from '@mui/material'
import getPhotos from '../../../../redux/search/search-operations'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'

const useStyles = makeStyles()({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '1em',
  },
})
export default function PaginationContainer() {
  const { classes } = useStyles()

  const searchValue = useAppSelector((state) => state.search.searchValue)
  const pagination = useAppSelector((state) => state.search.pagination)
  const dispatch = useAppDispatch()

  const setPaginationOption = (event: unknown, page: number) => {
    dispatch(getPhotos({ searchString: searchValue, currentPage: page }))
  }

  return (
    <Container className={classes.container}>
      <Pagination
        count={pagination?.pages}
        page={pagination?.page}
        onChange={(event, page) => setPaginationOption(event, page)}
      />
    </Container>
  )
}
