export const api_noff = {
    API_KEY : "cd73c1bd-276a-4e67-9aab-fe1f28627864",
    API_URL : "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?&page=",
}
export const api_off = {
    API_KEY : "TZECVJG-4A248BP-NV72AKJ-W2SGX7S",
    API_URL : "https://api.kinopoisk.dev/v1/movie?page=",
}


export const  api_query = (page) => {
    return fetch(api_noff.API_URL + page, {
        headers: { "Content-Type": "application/json", "X-API-KEY": api_noff.API_KEY},})
        .then((responce) => responce.json())
        .then(data => (data))
}




