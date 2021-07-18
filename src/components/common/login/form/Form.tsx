import {Button} from "@material-ui/core";
import {FormEvent, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {EmailField} from "./EmailField/EmailField";
import {PasswordField} from "./PasswordField/PasswordField";

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
    }

    return(
        <form noValidate className={classes.formWrapper} onSubmit={handleSubmit}>
            <EmailField classes={classes}
                        email={email}
                        setEmail={setEmail}/>
            <PasswordField classes={classes}
                           password={password}
                           setPassword={setPassword} />
            <Button className={classes.button} type="submit">Sign In</Button>
        </form>
    )
}