import * as React from 'react'
import * as PropTypes from 'prop-types'
import MovieCover from "./movie.cover";
import MovieTitle from "./movie.title";
import MovieDescription from "./movie.description";
import MovieYear from "./movie.year";


export default function MovieCard(props) {
    return (
        <div className='MovieCard'>
            <MovieCover cover={props.cover}/>
            <div className="under-cover">
                <MovieTitle title={props.title}/>
                <MovieYear year={props.year}/>
            </div>
            <MovieDescription description={props.description}/>
        </div>
    )
}

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    year: PropTypes.number,
    cover: PropTypes.string,

}
MovieCard.defaultProps = {
    title: "Just a Perfect Movie",
    description: "Cool description",
    year: 0,
    cover: ""
}