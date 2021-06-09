import * as React from "react";
// import "./app.css";
import MoviesList from "./MoviesList";
import Header from "../components/header";
import Footer from "../components/footer";
import ErrorBoundary from "../hooks/error.boundary";
import WithLoading from "../hooks/with.loading";

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
