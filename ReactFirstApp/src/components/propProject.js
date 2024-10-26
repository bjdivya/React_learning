import React from 'react'

function PropsProject(props) {
  return(
    <div>
      <h1>{props.name}</h1>
      <img src={props.src} alt={props.alt} width={props.width} height={props.height}></img>
      <p>{props.contactName}</p>
      <p>{props.email}</p>
    </div>
  )
}

export default PropsProject