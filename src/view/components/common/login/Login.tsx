import CancelIcon from '@mui/icons-material/Cancel';
import { ForwardedRef, forwardRef } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import Form from './form/Form';

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
});

type LoginPropsType = {
  handleClose: () => void
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Login({ handleClose }: LoginPropsType, ref: ForwardedRef<{}>) {
  const { classes } = useStyles();

  return (
    <Container className={classes.container}>
      <Container className={classes.title}>
        <Typography>Workpiece</Typography>
        <Button onClick={handleClose}>
          <CancelIcon />
        </Button>
      </Container>
      <Form />
    </Container>
  );
}

const LoginWithRef = forwardRef(Login);
export default LoginWithRef;
