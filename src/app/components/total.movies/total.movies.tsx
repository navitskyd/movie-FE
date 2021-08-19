import * as React from 'react'
import * as PropTypes from 'prop-types'
import './total.movies.css'

export default function TotalMovies(props) {
    return (
        <div className='total-movies'>{props.total} movies found
        </div>
    )
}

TotalMovies.propTypes = {
    total: PropTypes.number

}
TotalMovies.defaultProps = {
    total: 0
}