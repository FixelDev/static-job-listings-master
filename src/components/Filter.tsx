import React from 'react'

type Props = {
    name:string
    onFilterRemoveClick: (name:string) => void
}

function Filter(props:Props) {
    return (
        <div className='filter flex'>
            <p className="filter-name tag">{props.name}</p>
            <button className='remove-tag-btn' onClick={() => props.onFilterRemoveClick(props.name)}></button>
        </div>
    )
}

export default Filter