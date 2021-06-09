import React from "react";
// import "./app.css";
import MoviesList from "./MoviesList";
import Header from "./header";
import Footer from "./footer";
import ErrorBoundary from "./error.boundary";


export default class App extends React.Component {
    render() {
        return (
            <div className="component-app">
                <Header/>
                <ErrorBoundary>
                    <MoviesList/>
                </ErrorBoundary>
                <Footer>
                    some cool links
                </Footer>
            </div>
        )
    }
}
