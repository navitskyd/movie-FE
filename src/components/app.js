import React from "react";
// import "./app.css";
import MoviesList from "./MoviesList";
import Header from "./header";
import Footer from "./footer";
import ErrorBoundary from "./error.boundary";
import WithLoading from "./with.loading";

const MoviesListWithLoading = WithLoading(MoviesList)

export default class App extends React.Component {
    render() {
        return (
            <div className="component-app">
                <Header/>
                <ErrorBoundary>
                    <MoviesListWithLoading isLoading={false}/>
                </ErrorBoundary>
                <Footer>
                    some cool links
                </Footer>
            </div>
        )
    }
}
