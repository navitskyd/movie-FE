import * as React from 'react'
import './movie.card.css'
import MovieCover from "./movie.cover";
import MovieTitle from "./movie.title";
import MovieDescription from "./movie.description";
import MovieYear from "./movie.year";
import {MovieData} from "./movie.data";


export default function MovieCard(data: MovieData) {
    return (
        <div className='MovieCard'>
            <MovieCover cover={data.cover}/>
            <div className="under-cover">
                <MovieTitle title={data.title}/>
                <MovieYear year={data.year}/>
            </div>
            <MovieDescription description={data.description}/>
        </div>
    )
}

