import {Divider, Link, MenuItem, MenuList} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import React from "react";

export const Navigation = (props: any) => {
    return (<>
        <MenuList className={props.nav}>
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
    </>)
}