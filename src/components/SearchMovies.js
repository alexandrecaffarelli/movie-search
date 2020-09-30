import React, { useState } from "react";
import MovieCard from "./MovieCard";

export default function SearchMovies() {

    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const getMovie = async (event) => {
        event.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=bf2450b2165880b9d1e1d8dfa58f2774&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const result = await fetch(url);
            const data = await result.json();
            setMovies(data.results);
        } catch(error) {   
            console.error(error);
        }
    }

    return (
        <>
            <form className="form" onSubmit={getMovie}> 
                <label className="label" htmlFor="query"> Movie Name </label>
                <input className="input" type="text" name="query" placeholder="i.e. Scarface" value={query} onChange={ (event) => {setQuery(event.target.value)}}/>
                <button className="button" type="submit"> Search </button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </>
    )

}