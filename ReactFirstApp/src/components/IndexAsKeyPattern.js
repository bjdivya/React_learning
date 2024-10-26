import React from 'react'

function IndexAsKeyPattern() {
    const name=['Divya','Nivya','siddu','Divya']
  return (
    <div>
        <ul>{name.map((name,index)=><li key={index}>{name}</li>)}</ul>
    </div>
  )
}

export default IndexAsKeyPattern
