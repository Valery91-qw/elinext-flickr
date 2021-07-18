import {Button, InputAdornment, TextField} from "@material-ui/core";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import {FormEvent, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {EmailField} from "./EmailField/EmailField";

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
    const [isError, setIsError] = useState(false)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return(
        <form noValidate className={classes.formWrapper} onSubmit={handleSubmit}>
            <EmailField classes={classes} email={email} setEmail={setEmail}/>
            <TextField required
                       onChange={e => setPassword(e.target.value)}
                       InputProps={{
                           startAdornment: (
                               <InputAdornment position="start">
                                   <VisibilityOffIcon />
                               </InputAdornment>
                           )
                       }}
                       error={isError}
                       className={classes.field}
                       value={password}
                       size="small"
                       id="password"
                       name="password"
                       type="password"
                       label="Password"/>
            <Button className={classes.button} type="submit">Sign In</Button>
        </form>
    )
}