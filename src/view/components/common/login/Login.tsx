import { Form } from './form/Form'
import { forwardRef } from 'react'
import { makeStyles } from 'tss-react/mui'
import { Button, Container, Typography } from '@mui/material'

const useStyles = makeStyles()({
  container: {
    width: '25%',
    backgroundColor: '#fff',
  },
  title: {
    padding: '0.5em 0 1em',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

type LoginPropsType = {
  handleClose: () => void
}

export const Login = forwardRef(function Login({ handleClose }: LoginPropsType, ref) {
  const { classes } = useStyles()

  return (
    <Container className={classes.container}>
      <Container className={classes.title}>
        <Typography>Workpiece</Typography>
        <Button onClick={handleClose}>{/* <CancelIcon />*/}</Button>
      </Container>
      <Form />
    </Container>
  )
})
