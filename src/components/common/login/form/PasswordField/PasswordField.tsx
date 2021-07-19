import {ChangeEvent, useEffect, useState} from "react";
import {InputAdornment, TextField} from "@material-ui/core";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

type PasswordFieldPropsType = {
    classes: {
        field: string
    }
    password: string
    setPassword: (password: string) => void
    setCommonError: ({email, password}: {email: boolean, password: boolean}) => void
    commonError: {email: boolean, password: boolean}
}

export const PasswordField = ({classes, password, setPassword, setCommonError, commonError}: PasswordFieldPropsType) => {

    const [isError, setIsError] = useState(false)

    const handlePassword = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if(event.target.value.length < 8) {
            setIsError(true)
        } else  {
            setIsError(false)
        }
        setPassword(event.target.value)
        
    }
    
    useEffect(() => {
        setCommonError({email: commonError.email, password: isError})
    }, [commonError.email, isError, setCommonError])

    return (
        <TextField required
                   onChange={handlePassword}
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
    )
}