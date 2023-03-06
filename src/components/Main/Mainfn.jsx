import React, {useState, useEffect} from "react";
import {Movies} from "../Movies";
import styles from "./Main.module.scss"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {api_query, api_query_search} from './Api'

export const Mainfn = (props) => {
    const [ movies, setMovies ] = useState([])
    const [ pagesCount, setPagesCount ] = useState(0)
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ Search, setSearch ] = useState("")

    const styleMain =[styles.content, styles.container].join(' ');
    const stylePagination =[styles.pagination, styles.container].join(' ');
    const handleChange = (event, p) => {setCurrentPage(p)}

    useEffect(() => {
        //api_query(currentPage).then(data => console.log(data))
        api_query(currentPage).then((data) => {setMovies(data.films), setPagesCount(data.pagesCount)})},[]);

    useEffect(() => {
        if (props.search == "")
                api_query(currentPage).then((data) => {setMovies(data.films), setPagesCount(data.pagesCount)})},[currentPage]);

    useEffect(() => { console.log("==== movies ====>>> ", movies)} ,[movies]);

    useEffect(() => {
            if (props.search != "") {
                api_query_search(currentPage, props.search).then((data) => {
                    setMovies(data.films),
                        setPagesCount(data.pagesCount)
                })
            } else {
               // setCurrentPage(1)
                api_query(currentPage).then((data) => {
                    setMovies(data.films), setPagesCount(data.pagesCount)
                })
            }
        }
           // console.log("==== mainfn ====>>> ", props.search);

        ,[props.search, currentPage]);


    return (

        <main >
            <Stack spacing={2}>
                <Pagination count={pagesCount}
                            color="primary"
                            className={stylePagination}
                            page={currentPage}
                            onChange={handleChange}
                />
            </Stack>
            <div className={styleMain}>
                {movies.length ? (<Movies movies={movies} />
                ) : (<h3>Загрузка...</h3>)}
            </div>
        </main>
    )
}



