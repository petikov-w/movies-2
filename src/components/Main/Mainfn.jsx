import React, {useState, useEffect, useRef} from "react";
import {Movies} from "../Movies";
import styles from "./Main.module.scss"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {api_query, api_query_search} from './Api'

export const Mainfn = (props) => {
    const [ movies, setMovies ] = useState([])
    const [ pagesCount, setPagesCount ] = useState(0)
    const [ pagesCountSearch, setPagesCountSearch ] = useState(0)
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ currentPageSearch, setCurrentPageSearch ] = useState(1)
    const [ Search, setSearch ] = useState(false)
    const [ prevSearch, setPrevSearch ] = useState("")

    const [currents, setCurrents] = useState({
        Page: 1,
        PageSearch: 1
    })


    const styleMain =[styles.content, styles.container].join(' ');
    const stylePagination =[styles.pagination, styles.container].join(' ');
    const handleChange = (event, p) => { if (!Search) setCurrents.Page(p)
                                         else setCurrents.PageSearch(p)}
    // const handleChange = (event, p) => { if (!Search) setCurrentPage(p)
    //                                      else setCurrentPageSearch(p)}

    useEffect(() => {
        if (Search) {
            api_query_search(currents.PageSearch, props.search).then((data) => {
                setMovies(data.films), setPagesCountSearch(data.pagesCount)})
        } else {
            api_query(currents.Page).then((data) => {
                setMovies(data.films), setPagesCount(data.pagesCount)})} },[]);
    // useEffect(() => {
    //     if (Search) {
    //         api_query_search(currentPageSearch, props.search).then((data) => {
    //             setMovies(data.films), setPagesCountSearch(data.pagesCount)})
    //     } else {
    //         api_query(currentPage).then((data) => {
    //             setMovies(data.films), setPagesCount(data.pagesCount)})} },[]);

    // currentPage
    useEffect(() => {
    if (Search) {
        api_query_search(currents.PageSearch, props.search).then((data) => {
            setMovies(data.films), setPagesCountSearch(data.pagesCount)})
    } else {
        api_query(currents.Page).then((data) => {
            setMovies(data.films), setPagesCount(data.pagesCount)})} },[currents.Page, currents.PageSearch]);

    // useEffect(() => {
    // if (Search) {
    //     api_query_search(currentPageSearch, props.search).then((data) => {
    //         setMovies(data.films), setPagesCountSearch(data.pagesCount)})
    // } else {
    //     api_query(currentPage).then((data) => {
    //         setMovies(data.films), setPagesCount(data.pagesCount)})} },[currentPage, currentPageSearch]);




    // props.search
    useEffect(() => {
            props.search!="" ? setSearch(true) : setSearch(false);
            if(prevSearch != props.search)  setPrevSearch(props.search);
        },[props.search]);
    // Search
    useEffect(() => {
        if (Search) {
            setCurrentPageSearch(1);
            api_query_search(currentPageSearch, props.search).then((data) => {
                setMovies(data.films), setPagesCountSearch(data.pagesCount)})
        } else {
            setCurrentPage(1);
            api_query(currentPage).then((data) => {
                setMovies(data.films), setPagesCount(data.pagesCount)})}
         },[Search, prevSearch]);


    return (

        <main >
            <Stack spacing={2}>
                <Pagination count={!Search ? pagesCount : pagesCountSearch}
                            color="primary"
                            className={stylePagination}
                            page={!Search ? currents.Page : currents.PageSearch}
                            onChange={handleChange}
                />
            </Stack>
            {/*<Stack spacing={2}>*/}
            {/*    <Pagination count={!Search ? pagesCount : pagesCountSearch}*/}
            {/*                color="primary"*/}
            {/*                className={stylePagination}*/}
            {/*                page={!Search ? currentPage : currentPageSearch}*/}
            {/*                onChange={handleChange}*/}
            {/*    />*/}
            {/*</Stack>*/}
            <div className={styleMain}>
                {movies.length ? (<Movies movies={movies} />
                ) : (<h3>Загрузка...</h3>)}
            </div>
        </main>
    )
}



