import * as React from 'react'


export default function MovieCover(cover) {
    const coverImg = require('./images/' + cover.cover);
    return <img src={coverImg}/>
}

