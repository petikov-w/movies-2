import React, {useState} from "react";
import {Movies} from "../Movies/Movies";
import styles from "./Main.module.scss"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {api_noff} from './Api'

class Maink extends React.Component {

    state = {
        movies: [],
        pagesCount: 0,
        currentPage: 1
    }

    componentDidMount() {
        fetch(api_noff.API_URL + this.state.currentPage, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": api_noff.API_KEY,
            },
        }).then((responce) => responce.json())
          .then((data) => this.setState({ movies: data.films, pagesCount: data.pagesCount}))

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.currentPage !== this.state.currentPage) {
            fetch(api_noff.API_URL + this.state.currentPage, {
                headers: {
                    "Content-Type": "application/json",
                    "X-API-KEY": api_noff.API_KEY,
                },
            }).then((responce) => responce.json())
                .then((data) => this.setState({ movies: data.films, pagesCount: data.pagesCount}))
        }
    }

    render () {
       const styleMain =[styles.content, styles.container].join(' ');
       const stylePagination =[styles.pagination, styles.container].join(' ');
       const { movies, pagesCount, currentPage } = this.state;

       const handleChange = (event, p) => {
            // console.log(event, p)
            this.setState({currentPage: p})
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
}
export {Maink};


