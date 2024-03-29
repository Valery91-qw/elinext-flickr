import { makeStyles } from 'tss-react/mui'
import { Button } from '@mui/material'
import { FormEvent, useState } from 'react'
import EmailField from './EmailField/EmailField'
import PasswordField from './PasswordField/PasswordField'
// TODO must change this form processing
export const useStyles = makeStyles()({
  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  field: {
    marginBottom: '1em',
  },
  button: {
    margin: '1em 0',
  },
})

export default function Form() {
  const { classes } = useStyles()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [commonError, setCommonError] = useState({ email: true, password: true })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <form noValidate className={classes.formWrapper} onSubmit={handleSubmit}>
      <EmailField
        classes={classes}
        setCommonError={setCommonError}
        commonError={commonError}
        email={email}
        setEmail={setEmail}
      />
      <PasswordField
        classes={classes}
        setCommonError={setCommonError}
        commonError={commonError}
        password={password}
        setPassword={setPassword}
      />
      <Button
        disabled={commonError.email || commonError.password}
        className={classes.button}
        type='submit'
      >
        Sign In
      </Button>
    </form>
  )
}
