import {Container, InputAdornment, TextField} from "@material-ui/core";
import EmailIcon from '@material-ui/icons/Email';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

export const Login = () => {
    return (
        <Container>
            <p>
                header form and some info
            </p>
            <form noValidate>
                <TextField required
                           InputProps={{
                               startAdornment: (
                                   <InputAdornment position="start">
                                       <EmailIcon />
                                   </InputAdornment>
                               ),
                           }}
                           size="small"
                           id="email"
                           name="email"
                           label="Email address"/>
                <TextField required
                           InputProps={{
                               startAdornment: (
                                    <InputAdornment position="start">
                                        <VisibilityOffIcon />
                                    </InputAdornment>
                               )
                           }}
                           size="small"
                           id="password"
                           name="password"
                           type="password"
                           label="Password"/>
            </form>
        </Container>
    )
}