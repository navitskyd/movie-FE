import * as React from "react";
import MovieCard from "../components/movie.card";

let movies = [
    {
        title: 'Rick and Morty',
        description: 'Animated Film',
        id: 'r4323'
    }, {
        title: 'Rambo II',
        description: 'Action Film',
        id: 'r4325'
    }, {
        title: 'Pulp Fiction',
        description: 'Crime Film',
        id: 'r4725'
    }
];

export default function MoviesList() {
    return (
        <>
            {movies.map((movie) => (
                <MovieCard title={movie.title} description={movie.description} key={movie.id}/>
            ))}
        </>
    )
}