import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from 'tss-react/mui'
import { Divider, Link, MenuItem, MenuList } from '@mui/material'

const useStyles = makeStyles()({
  nav: {
    marginTop: '5em',
    minHeight: 'calc(70vh - 1px)',
  },
  navLink: {
    color: '#E7FF73',
    '&:hover': {
      color: '#fff',
    },
  },
  menuItem: {
    '&:hover': {
      backgroundColor: '#E7FF73',
    },
  },
})

export const Navigation = () => {
  const { classes } = useStyles()

  return (
    <MenuList className={classes.nav}>
      <Link className={classes.navLink} component={RouterLink} to='/'>
        <MenuItem className={classes.menuItem}>{/* <CloudIcon />*/}</MenuItem>
      </Link>
      <Divider />
      <Link className={classes.navLink} component={RouterLink} to='/bookmarks'>
        <MenuItem className={classes.menuItem}>{/* <BookmarksIcon />*/}</MenuItem>
      </Link>
    </MenuList>
  )
}
