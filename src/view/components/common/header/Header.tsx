import React, {forwardRef, useState} from "react";
import {Login} from "../login/Login";
import {makeStyles} from "tss-react/mui";
import {AppBar, IconButton, Modal} from "@mui/material";

const useStyles = makeStyles()({
    bar: {
        backgroundColor: '#FFE500',
        padding: '1em 2em',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        padding: '0 .5em',
    },
    title: {
        fontSize: '1.5em',
        color: '#A69500',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
})


export const Header = forwardRef((props = {}, ref) => {

    const { classes } = useStyles();

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <AppBar component='header' className={classes.bar}>
            <span className={classes.title}>Image Finder</span>
            <IconButton className={classes.button} onClick={handleOpen}>
                {/*<AccountCircleIcon/>*/}
            </IconButton>
            {/*@ts-ignore*/}
            <Modal ref={ref} className={classes.modal} aria-labelledby='Google bookmark' open={open}>
                <Login handleClose={handleClose} />
            </Modal>
        </AppBar>
    )
})