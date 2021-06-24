import * as React from 'react'


export default function SortBy() {
    return (
        <div className='SortBy'>Sort by
            <select name="sorted-by" defaultValue="date">
                <option value="date">Release date</option>
                <option value="genre">Genre</option>
            </select>
        </div>
    )
}
