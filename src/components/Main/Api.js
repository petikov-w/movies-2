export const api_noff = {
    // API_KEY : "cd73c1bd-276a-4e67-9aab-fe1f28627864",
    API_KEY : process.env.REACT_APP_API_KEY,
    API_URL : "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?&page=",
    API_URL_S : "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=",
}
// export const API_KEY = () => {
//     return process.env.REACT_APP_API_KEY; // will return API KEY in .env file.
// };

export const api_off = {
    API_KEY : "TZECVJG-4A248BP-NV72AKJ-W2SGX7S",
    API_URL : "https://api.kinopoisk.dev/v1/movie?page=",
}


export const  api_query = (page) => {
    console.log('======= key =======>>> ', api_noff.API_KEY)
    console.log('API Key from Define Plugin:', API_KEY);
    return fetch(api_noff.API_URL + page, {
        headers: { "Content-Type": "application/json", "X-API-KEY": api_noff.API_KEY},})
        .then((responce) => responce.json())
        .then(data => (data))
}

export const  api_query_search = (page, keyword) => {
    return fetch(api_noff.API_URL_S + keyword + "&page=" + page, {
        headers: { "Content-Type": "application/json", "X-API-KEY": api_noff.API_KEY},})
        .then((responce) => responce.json())
        .then(data => (data))
}




