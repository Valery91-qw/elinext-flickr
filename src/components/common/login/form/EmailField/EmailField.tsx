import {InputAdornment, TextField} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import {ChangeEvent, useEffect, useState} from "react";

type LoginFieldPropsType = {
    classes: {
        field: string
    }
    email: string
    setEmail: (email: string) => void
    setCommonError: ({email, password}: {email: boolean, password: boolean}) => void
    commonError: {email: boolean, password: boolean}
}

export const EmailField = ({classes, email, setEmail, setCommonError, commonError}: LoginFieldPropsType) => {

    const [isError, setIsError] = useState(false)

    const handleEmail = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if(!event.target.value.match(/@/)) {
            setIsError(true)
        } else {
            setIsError(false)
        }
        setEmail(event.target.value)

    }
    useEffect(() => {
        setCommonError({email: isError, password: commonError.password})
    }, [commonError.password, isError, setCommonError])
    
    
    return (
        <TextField required
                   onChange={handleEmail}
                   InputProps={{
                       startAdornment: (
                           <InputAdornment position="start">
                               <EmailIcon />
                           </InputAdornment>
                       ),
                   }}
                   value={email}
                   className={classes.field}
                   error={isError}
                   size="small"
                   id="email"
                   name="email"
                   label="Email address"/>
    )
}