import {useEffect, useState} from "react";
import {Icon, InputBase, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import {useDispatch} from "react-redux";
import {getPhotos} from "../../../bll/search-reducer/search-reducer";

const useStyles = makeStyles({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        margin: '0 1em 1em',
        backgroundColor: 'rgba(250,255,115,0.5)'
    },
    input: {
        width: '100%',
    },
    inputIcon: {
        margin: '0.3em',
        color: '#FFE500'
    }
})

export const SearchField = () => {

    const dispatch = useDispatch()

    const [searchValue, setSearchData] = useState('')
    const classes = useStyles()

    useEffect(() => {
        if(searchValue === '') return
        const timerOutId = setTimeout(() => {
            dispatch(getPhotos(searchValue))
        }, 500)
        return () => {
            clearTimeout(timerOutId)
        }
    }, [dispatch, searchValue])

    return (
        <Paper className={classes.root}>
            <Icon className={classes.inputIcon}>
                <SearchIcon />
            </Icon>
            <InputBase className={classes.input}
                       value={searchValue}
                       placeholder="Search"
                       onChange={e => setSearchData(e.currentTarget.value)}/>
        </Paper>
    )
}