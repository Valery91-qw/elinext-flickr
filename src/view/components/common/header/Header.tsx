import { AppBar, IconButton, Modal } from '@mui/material'
import React, { useState } from 'react'
import { makeStyles } from 'tss-react/mui'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LoginWithRef from '../login/Login'

const useStyles = makeStyles()({
  bar: {
    backgroundColor: '#FFE500',
    padding: '1em 2em',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: '0 .5em',
  },
  title: {
    fontSize: '1.5em',
    color: '#A69500',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default function Header() {
  const { classes } = useStyles()

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <AppBar component='header' className={classes.bar}>
      <span className={classes.title}>Image Finder</span>
      <IconButton className={classes.button} onClick={handleClick}>
        <AccountCircleIcon />
      </IconButton>
      <Modal className={classes.modal} aria-labelledby='Google bookmark' open={isOpen}>
        <LoginWithRef handleClose={handleClick} />
      </Modal>
    </AppBar>
  )
}
