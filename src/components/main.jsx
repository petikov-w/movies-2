import styles from '../style.scss';
import React from "react";
import {Movies} from "./movies";

const API_KEY = "cd73c1bd-276a-4e67-9aab-fe1f28627864";
const API_URL_POPULAR = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
class Main extends React.Component {
    state = {
        movies: []
    }

    componentDidMount() {
        fetch(API_URL_POPULAR, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY,
            },
        }).then((responce) => responce.json()).then(
            (data) => this.setState({ movies: data.films })
        );
    }

    render () {
       const sdf =[styles.content, styles.container].join(' ');
       const { movies } = this.state;
       console.log("movies.length ====>>> ", this.state.movies)
       return (
               <main className={sdf}>
                   {movies.length ? (
                       <Movies movies={this.state.movies} />
                   ) : (
                       <h3>Загрузка...</h3>
                   )}
               </main>
           )

    }
}
export {Main};


