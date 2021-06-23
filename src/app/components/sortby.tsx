import * as React from 'react'


export default function SortBy() {
    return (
        <div className='SortBy'>Sort by
            <select name="sorted-by">
                <option selected>Release date</option>
                <option>Genre</option>
            </select>
        </div>
    )
}
