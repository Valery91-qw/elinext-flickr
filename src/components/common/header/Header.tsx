import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {AppBar, IconButton} from "@material-ui/core";
import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
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
    }
})

export const Header = () => {

    const classes = useStyles()

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
        console.log(open)
    };

    return (
        <AppBar component='header' className={classes.bar}>
            <span className={classes.title}>Image Finder</span>
            <IconButton className={classes.button} onClick={handleOpen}>
                <AccountCircleIcon />
            </IconButton>
        </AppBar>
    )
}