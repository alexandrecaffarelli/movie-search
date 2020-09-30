import React from "react"

export default function SearchMovies() {

    const getMovie = async (event) => {
        event.preventDefault();
        console.log("submitting");

        const query = "Jurassic Park";
        const url = `https://api.themoviedb.org/3/search/movie?api_key=bf2450b2165880b9d1e1d8dfa58f2774&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
        } catch(error) {   
            console.error(error);
        }

    }

    return (
        <form className="form" onSubmit={getMovie}> 
            <label className="label" htmlFor="query"> Movie Name </label>
            <input className="input" type="text" name="query" placeholder="i.e. Scarface"></input>
            <button className="button" type="submit"> Search </button>
        </form>
    )

}