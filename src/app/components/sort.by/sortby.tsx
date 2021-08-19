import * as React from 'react'
import './sort.by.css'

export default () => (
    <div className='SortBy'>Sort by
        <select name="sorted-by" defaultValue="date">
            <option value="date">Release date</option>
            <option value="genre">Genre</option>
        </select>
    </div>
)
