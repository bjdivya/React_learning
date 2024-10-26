//react can be written with or without JSX
//JSX Makes react code simpler and debugger
//JSX Is a js XML language which embedded HTML into js
//JSX internally uses React.createElement that uses react library that's why we need to import react

import React from 'react'

const Hello=()=>{
    return(
<div>
    <h1>Hello Divya!!</h1>
</div>
    )
}

export default Hello