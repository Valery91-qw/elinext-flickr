import Pagination from "@material-ui/lab/Pagination"
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../../bll/store";
import {Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {getPhotos} from "../../../../bll/search/search-operations";

//TODO fix lines under ts-ignore

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '1em',

    },
})
export const PaginationContainer = () => {

    const classes = useStyles()

    const searchValue = useSelector<RootStateType, string | undefined>(state => state.search.searchValue)
    const pagination = useSelector<RootStateType, {pages: number, page: number} | null >(state => state.search.pagination)
    const dispatch = useDispatch()

    const paginationOption = (event: unknown, page: number) => {
        // @ts-ignore
        dispatch(getPhotos(searchValue,page))
    }

    const totalPages = pagination ? pagination.pages : 0
    const currentPages = pagination ? pagination.page: 1

    return (
        <Container className={classes.container}>
            <Pagination count={totalPages}
                        page={currentPages}
                        onChange={(event, page) => paginationOption(event, page)}/>
        </Container>
    )
}