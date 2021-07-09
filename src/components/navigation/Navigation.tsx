import {Divider, Link, MenuItem, MenuList} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    nav: {
        marginTop: '5em'
    }
})


export const Navigation = () => {

    const classes = useStyles();

    return (
        <MenuList className={classes.nav}>
            <MenuItem button>
                <SearchIcon/>
            </MenuItem>
            <Divider/>
            <MenuItem button>
                <BookmarksIcon>
                    <Link onClick={() => console.log('hello')} />
                </BookmarksIcon>
            </MenuItem>
        </MenuList>
    )
}