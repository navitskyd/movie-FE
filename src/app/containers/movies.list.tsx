import * as React from "react";
import MovieCard from "../components/movie.card/movie.card";

const movies = [
    {
        title: "Rick and Morty",
        description: "Animated Film",
        id: "r4323a",
        cover: "rick.jpg",
        year: 1998
    },
    {
        title: "Rambo II",
        description: "Action Film",
        cover: "rambo.jpg",
        id: "r4325b",
        year: 1999
    },
    {
        title: "Pulp Fiction",
        description: "Crime Film",
        id: "r4725c",
        cover: "pulp.jpg",
        year: 2001
    },
    {
        title: "Pulp Fiction",
        description: "Crime Film",
        id: "r4725d",
        cover: "pulp.jpg",
        year: 2002
    },
    {
        title: "Rick and Morty",
        description: "Animated Film",
        id: "r4323e",
        cover: "rick.jpg",
        year: 2005
    }
];
export default () => (
    <>
        {movies.map((movie) => (
            <MovieCard title={movie.title} description={movie.description} key={movie.id}
                       cover={movie.cover} year={movie.year}/>
        ))}
    </>
)