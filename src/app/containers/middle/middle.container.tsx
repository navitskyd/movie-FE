import * as React from "react";
import MoviesList from "../movies.list";
import ErrorBoundary from "../../hooks/error.boundary";
import WithLoading from "../../hooks/with.loading";
import Genres from "../../components/genres/genres";
import SortBy from "../../components/sort.by/sortby";
import TotalMovies from "../../components/total.movies/total.movies";
import './middle.container.css';

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