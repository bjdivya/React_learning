//without JSX
//in JS "class" is reserved name, so in JS we have to use "className" instead of class

import React from 'react'

function HelloWithoutJSX(){

     //takes three parameter (tag,properties,children) 
    return React.createElement('div',{className:'divclass',id:'main'},React.createElement(
            'h1',{id:'title' },'Hello, Divya !! This line written without JSX'
        ));
    

}

export default HelloWithoutJSX