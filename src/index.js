import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchMovies from "./components/SearchMovies"

class Main extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="title"> React Movie Search </h1>
                <SearchMovies />
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("root"));