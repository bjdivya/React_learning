import React from 'react'

function childrenComponent(props) {
  const child=['Siddu','Vikash','kim','jack','rose'];
  const name=Math.floor(Math.random()*child.length);
  return (
    <div>
        <button onClick={()=>props.greetFunction(child[name])}>Greet parents!!</button>
    </div>
  )
}

export default childrenComponent