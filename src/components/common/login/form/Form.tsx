import {Button, InputAdornment, TextField} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import {FormEvent, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    formWrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
    field: {
        marginBottom: '1em'
    },
    button: {
        margin: '1em 0'
    }
})

export const Form = () => {

    const classes = useStyles();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(`Email: ${email}, Password: ${password}`)
    }

    return(
        <form noValidate className={classes.formWrapper} onSubmit={handleSubmit}>
            <TextField required
                       onChange={e => setEmail(e.target.value)}
                       InputProps={{
                           startAdornment: (
                               <InputAdornment position="start">
                                   <EmailIcon />
                               </InputAdornment>
                           ),
                       }}
                       value={email}
                       className={classes.field}
                       size="small"
                       id="email"
                       name="email"
                       label="Email address"/>
            <TextField required
                       onChange={e => setPassword(e.target.value)}
                       InputProps={{
                           startAdornment: (
                               <InputAdornment position="start">
                                   <VisibilityOffIcon />
                               </InputAdornment>
                           )
                       }}
                       size="small"
                       className={classes.field}
                       value={password}
                       id="password"
                       name="password"
                       type="password"
                       label="Password"/>
            <Button className={classes.button} type="submit">Sign In</Button>
        </form>
    )
}