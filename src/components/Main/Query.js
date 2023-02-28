
const API_KEY_NON_OFF = "cd73c1bd-276a-4e67-9aab-fe1f28627864";
const API_KEY_OFF ="TZECVJG-4A248BP-NV72AKJ-W2SGX7S";
const API_URL_NON_OFF = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?&page=";
const API_URL_OFF = "https://api.kinopoisk.dev/v1/movie?page=";


export const query_kino_non_official = () => {
    fetch(API_URL_NON_OFF + this.state.currentPage, {
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": API_KEY_NON_OFF,
        },
    }).then((responce) => responce.json())
        .then((data) => this.setState({ movies: data.films, pagesCount: data.pagesCount}))
}

export const query_kino_official = () => {
    fetch(API_URL_OFF + this.state.currentPage, {
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": API_KEY_OFF,
        },
    }).then((responce) => responce.json())
        .then((data) => this.setState({ movies: data.docs, pagesCount: data.pages}))
}