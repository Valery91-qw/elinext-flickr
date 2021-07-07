import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {AppBar, Fade, IconButton, Modal} from "@material-ui/core";
import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    bar: {
        backgroundColor: '#DFC021',
        padding: '1em 2em',
    },
    button: {
        padding: "0 .5em",
        display: 'flex',
        alignSelf: 'flex-end'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: '#917B0B',
        border: '2px solid #000',
        padding: "2em 2em",
    },
});

export const Header = () => {

    const classes = useStyles()

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
        console.log(open)
    };

    return (
        <AppBar className={classes.bar}>
            <IconButton className={classes.button} onClick={handleOpen}>
                <AccountCircleIcon />
            </IconButton>
            <Modal aria-labelledby="transition-modal-title"
                   aria-describedby="transition-modal-description"
                   open={open} onClose={handleOpen}
                   className={classes.modal}>
                <Fade in={open}>
                    <div className={classes.paper}>
                        "fdsfsdfd"
                    </div>
                </Fade>
            </Modal>
        </AppBar>
    )
}