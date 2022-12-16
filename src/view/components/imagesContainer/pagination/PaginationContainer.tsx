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

  const paginationOption = (event: unknown, page: number) => {
    dispatch(getPhotos({ searchString: searchValue, currentPage: page }))
  }

  const totalPages = pagination ? pagination.pages : 0
  const currentPages = pagination ? pagination.page : 1

  return (
    <Container className={classes.container}>
      <Pagination
        count={totalPages}
        page={currentPages}
        onChange={(event, page) => paginationOption(event, page)}
      />
    </Container>
  )
}
