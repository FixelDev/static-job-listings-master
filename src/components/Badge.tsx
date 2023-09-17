import React from 'react'

interface Props{
    name:string
}

function Badge(props:Props) {
  return (
    <div className={`badge badge-${props.name}`}>
        <p className="badge-name">{props.name}</p>
    </div>
  )
}

export default Badge