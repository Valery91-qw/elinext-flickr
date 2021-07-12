import {TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import { ChangeEvent } from "react";
import {useState} from "react";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        margin: '0.5em'
    },
    field: {
    }
})

export const TagField = () => {

    const classes = useStyles()

    const [tagValue, setTagValue] = useState('')

    const tagValueHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setTagValue(event.target.value)
    }

    return (<>
        <TextField className={classes.root}
                   onChange={tagValueHandler}
                   value={tagValue}
                   id="outlined-basic"
                   size="small"
                   variant="outlined"
                   placeholder="Some Tags ?" />
    </>)
}