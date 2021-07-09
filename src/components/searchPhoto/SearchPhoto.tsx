import {useEffect, useState} from "react";

export const SearchPhoto = (props: any) => {

    const [searchData, setSearchData] = useState('');

    useEffect(() => {
        const timerOutId = setTimeout(() => props.setMessage(searchData), 500)
        return () => {
            clearTimeout(timerOutId)
        }
    }, [props, searchData])

    return (<div style={{marginTop: "5em"}}>
    <input value={searchData} onChange={e => setSearchData(e.currentTarget.value)}/>
        
    </div>)
}