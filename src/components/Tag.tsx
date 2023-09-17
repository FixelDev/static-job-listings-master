import React from 'react'

type Props = {
    name:string
    onClick:(tag:string) => void
}

function Tag(props:Props) {
    return (
        <button className='tag' onClick={() => props.onClick(props.name)}>
            {props.name}
        </button>
    )
}

export default Tag