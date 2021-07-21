import {Button, Container, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import CancelIcon from '@material-ui/icons/Cancel';
import {Form} from "./form/Form";

const useStyles = makeStyles({
    container: {
        width: '25%',
        backgroundColor: '#fff',
    },
    title: {
        padding: '0.5em 0 1em',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})

type LoginPropsType = {
    handleClose: () => void
}

export const Login = ({handleClose}: LoginPropsType) => {

    const classes = useStyles()

    return (
        <Container className={classes.container}>
            <Container className={classes.title}>
            <Typography>
                Workpiece
            </Typography>
                <Button onClick={handleClose}>
                    <CancelIcon />
                </Button>
            </Container>
            <Form />
        </Container>
    )
}