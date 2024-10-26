//destructing can be done in 2 way in FC
//1_Destructing in parameter
//2_Destructure in function body


import React from 'react'

/* //method 1
const Destructure=({name,age})=>{
return(<div>
    <h1>My name is {name} and i'm {age} years old</h1>
</div>);
} */

//method 2
const Destructure=(props)=>{
    const {name, age}=props;
    return(<div>
        <h1>My name is {name} and i'm {age} years old</h1>
    </div>);
}
export default Destructure