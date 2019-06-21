// If you want to use API_KEY, create a constants.ts file and store it there.
import { API_KEY } from './constants';

export function getTrendingMovies() {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
    return fetch(url)
        .then((resposne) => resposne.json().then((res) =>  res));
}


export function getLatestMovies() {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&include_adult=false `;
    return fetch(url)
        .then((resposne) => resposne.json().then((res) =>  res));
}


export function getPopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    return fetch(url)
        .then((resposne) => resposne.json().then((res) =>  res));
}

export function getMovieGenres() {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
    return fetch(url)
        .then((resposne) => resposne.json().then((res) =>  res));
}
