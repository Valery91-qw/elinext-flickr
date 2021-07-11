import {useEffect, useState} from "react";
import {Icon, InputBase, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import {useDispatch} from "react-redux";
import {setSearchValue} from "../../../bll/search-reducer";

const useStyles = makeStyles({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        margin: '0 1em 1em'
    },
    input: {
        width: '100%',
    },
    inputIcon: {
        margin: '0.3em'
    }
})

export const SearchField = () => {

    const dispatch = useDispatch();

    const [searchData, setSearchData] = useState('');
    const classes = useStyles();

    useEffect(() => {
        const timerOutId = setTimeout(() => {
            dispatch(setSearchValue(searchData))
        }, 500)
        return () => {
            clearTimeout(timerOutId)
        }
    }, [dispatch, searchData])

    return (
        <Paper className={classes.root}>
            <Icon className={classes.inputIcon}>
                <SearchIcon />
            </Icon>
            <InputBase className={classes.input}
                       value={searchData}
                       placeholder="Search"
                       onChange={e => setSearchData(e.currentTarget.value)}/>
        </Paper>
    )
}