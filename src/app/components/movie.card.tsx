import * as React from 'react'
import * as PropTypes from 'prop-types'
//import './styles.css'

export default function MovieCard(props) {
    return (
        <div className='MovieCard'>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}
MovieCard.defaultProps={
    title:"Just a Perfect Movie",
    description: "Cool description"
}