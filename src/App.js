import React from "react";
import SearchMovies from "./components/SearchMovies";

export default function App() {
    return (
        <div className="container">
            <img className="movie-image" src="./img/movie.jpg"/>
            <h1 className="title"> React Movie Search </h1>
            <SearchMovies />
        </div>
    );
}