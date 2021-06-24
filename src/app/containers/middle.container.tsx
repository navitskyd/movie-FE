import * as React from "react";
import MoviesList from "./movies.list";
import ErrorBoundary from "../hooks/error.boundary";
import WithLoading from "../hooks/with.loading";
import Genres from "../components/genres";
import SortBy from "../components/sortby";
import TotalMovies from "../components/total.movies";

const MoviesListWithLoading = WithLoading(MoviesList)

export default () => (<div className="middle-region">
        <ErrorBoundary>
            <div className="first-row">
                <Genres/>
                <SortBy/>
            </div>
            <TotalMovies total={39}/>

            <MoviesListWithLoading isLoading={false}/>
        </ErrorBoundary>
    </div>
)