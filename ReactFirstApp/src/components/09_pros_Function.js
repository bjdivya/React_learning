// properties are the objects, it contains properties that can be passed to components

import React from 'react'

const Bts=props=>{
    return(
        <h3 style={{color:'purple',fontFamily:'cursive'}}>This is {props.name}, i'm a {props.position}{props.emoji}</h3>
    )
}

export default Bts