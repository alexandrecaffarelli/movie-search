import React, { Component } from "react";
import ReactDOM from "react-dom";

class Main extends Component {
    render() {
        return (
            <h1> Hello world! </h1>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("root"));