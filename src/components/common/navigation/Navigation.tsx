import {Divider, Link, MenuItem, MenuList, Modal} from "@material-ui/core";
import CloudIcon from '@material-ui/icons/Cloud';
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import { Link as RouterLink} from 'react-router-dom';


const useStyles = makeStyles({
    nav: {
        marginTop: '5em',
        minHeight: 'calc(70vh - 1px)',
    },
    navLink: {
        color: '#E7FF73',
        '&:hover': {
            color: '#fff'
        }
    },
    menuItem: {
        '&:hover': {
            backgroundColor: '#E7FF73'
        }
    }
})


export const Navigation = () => {

    const classes = useStyles();

    return (
        <MenuList className={classes.nav}>
            <Link className={classes.navLink} component={RouterLink} to="/">
                <MenuItem className={classes.menuItem} button>
                    <CloudIcon />
                </MenuItem>
            </Link>
            <Divider/>
            <Link className={classes.navLink} component={RouterLink} to="/bookmarks">
                <MenuItem button className={classes.menuItem}>
                    <BookmarksIcon />
                </MenuItem>
            </Link>
        </MenuList>
    )
}