import React from "react"

function SearchMovies () {
    return (
        <form className="form"> 
            <label className="label" htmlFor="query"> Movie Name </label>
            <input className="input" type="text" name="query" placeholder="i.e. Scarface"></input>
            <button className="button" type="submit"> Search </button>
        </form>
    )
}

export default SearchMovies