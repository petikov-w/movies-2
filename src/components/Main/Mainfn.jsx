import React, {useState, useEffect} from "react";
import {Movies} from "../Movies";
import styles from "./Main.module.scss"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {api_noff, api_query} from './Api'

export const Mainfn = () => {
    const [ movies, setMovies ] = useState([])
    const [ pagesCount, setPagesCount ] = useState(0)
    const [ currentPage, setCurrentPage ] = useState(1)

    const styleMain =[styles.content, styles.container].join(' ');
    const stylePagination =[styles.pagination, styles.container].join(' ');

    useEffect(() => {
        console.log(west)
        const west = api_query(currentPage)
            console.log(west.json());
          //  console.log(west.pagesCount);
            // setMovies(west.films);
            // setPagesCount(west.pageCount);
        }
        // fetch(api_noff.API_URL + currentPage, {
        //     headers: { "Content-Type": "application/json", "X-API-KEY": api_noff.API_KEY},})
        //     .then((responce) => responce.json())
        //     .then((data) => {setMovies(data.films), setPagesCount(data.pagesCount)})}
        ,[]);

    useEffect(() => {
        console.log(currentPage);
        fetch(api_noff.API_URL + currentPage, {
                headers: {"Content-Type": "application/json", "X-API-KEY": api_noff.API_KEY},})
                .then( (responce) => responce.json())
                .then((data) => { setMovies(data.films)
                                setPagesCount(data.pagesCount)})}, [currentPage])
    const handleChange = (event, p) => {
        setCurrentPage(p)
    }

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



