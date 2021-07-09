import {Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    footer: {
        textAlign: 'left',
        backgroundColor: '#DEFF40',
        color: '#89A600',
        margin: '1em 0 0 0',
        padding: '1em 0 1em 3em',
    },
})

export const Footer = () => {

    const classes = useStyles();

    return (
        <footer>
            <Typography className={classes.footer} variant="h6" align="center" gutterBottom>
                Copyrights
            </Typography>
        </footer>
    )
}