import * as React from 'react'


export default ({cover}) => {
    const coverImg = require(`./images/${cover}`);
    return <img src={coverImg}/>
}

