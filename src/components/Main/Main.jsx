import React, {useState} from "react";
// import {useState} from "react";
import {Movies} from "../Movies/Movies";
import styles from "./Main.module.scss"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {PaginationItem} from "@mui/material";


const API_KEY = "cd73c1bd-276a-4e67-9aab-fe1f28627864";
// const API_URL_POPULAR = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
const API_URL = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?&page=";
class Main extends React.Component {

    state = {
        movies: [],
        pagesCount: 0,
        currentPage: 1
    }

    componentDidMount() {
        fetch(API_URL + this.state.currentPage, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY,
            },
        }).then((responce) => responce.json())
          .then((data) => this.setState({ movies: data.films, pagesCount: data.pagesCount}))
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     fetch(API_URL + this.state.currentPage, {
    //         headers: {
    //             "Content-Type": "application/json",
    //             "X-API-KEY": API_KEY,
    //         },
    //     }).then((responce) => responce.json())
    //         .then((data) => this.setState({ movies: data.films, pagesCount: data.pagesCount}))
    // }



    render () {
       const styleMain =[styles.content, styles.container].join(' ');
       const stylePagination =[styles.pagination, styles.container].join(' ');
       const { movies, pagesCount, currentPage } = this.state;
       // const West = () => {
       //    // const [Page, setPage] = useState(1);
       //   //  console.log(PaginationItem(pagesCount))
       // }

        //console.log(pagesCount);
       // const handleChange = (event, p) => {
       //      console.log(event, p)
       //      this.setState({currentPage: p})
       // }

       return (

               <main >
                   <h4>Текущая страница: {currentPage}</h4>
                   <Stack spacing={2}>
                       <Pagination count={pagesCount}
                                   color="primary"
                                   className={stylePagination}
                                   page={currentPage}
                                   // onClick={West}
                                   // onChange={handleChange}
                       />
                   </Stack>
                   <div className={styleMain}>
                       {movies.length ? (
                           <Movies movies={movies} />
                       ) : (
                           <h3>Загрузка...</h3>
                       )}
                   </div>

               </main>
           )

    }
}
export {Main};


