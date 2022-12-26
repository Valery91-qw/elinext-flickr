import { memo, useEffect, useState } from 'react'
import { makeStyles } from 'tss-react/mui'
import { Icon, InputBase, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import getPhotos from '../../../../redux/search/search-operations'
import {useAppDispatch, useAppSelector} from '../../../../redux/hooks'

const useStyles = makeStyles()({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    margin: '0 1em 1em',
    backgroundColor: 'rgba(250,255,115,0.5)',
  },
  input: {
    width: '100%',
  },
  inputIcon: {
    margin: '0.3em',
    color: '#FFE500',
  },
})

function SearchField() {
  const searchQuery = useAppSelector((state) => state.search.searchValue)
  const dispatch = useAppDispatch()

  const [searchValue, setSearchData] = useState<string | undefined>(searchQuery)
  const { classes } = useStyles()

  useEffect(() => {
    if (searchValue === undefined || searchValue === searchQuery) return undefined
    const timerOutId = setTimeout(() => {
      dispatch(getPhotos({ searchString: searchValue } ))
    }, 500)
    return () => {
      clearTimeout(timerOutId)
    }
  /* eslint-disable react-hooks/exhaustive-deps */
  }, [dispatch, searchValue])

  return (
    <Paper className={classes.root}>
      <Icon className={classes.inputIcon}>
        <SearchIcon />
      </Icon>
      <InputBase
        className={classes.input}
        value={searchValue || ''}
        placeholder='Search'
        onChange={(e) => setSearchData(e.currentTarget.value)}
      />
    </Paper>
  )
}

const SearchFieldMemo = memo(SearchField)

export default SearchFieldMemo
