import React, { Component } from 'react'

//4 Ways
//1.if else
//2.element variable
//3.Ternary operator
//4.short circuit operator

 class ConditionalRendering extends Component {
    constructor(props){
     super(props);
     this.state={
        isLoggedIn:true,
     }
    }
  render() {
    /* if(this.state.isLoggedIn){
        return (
            <div>
                <h1>Welcome Divya</h1>
            </div>
        )
    }
    else{
        return (
            <div>
                <h1>Welcome Guest</h1>
            </div>
        ) 
    } */


    //second way
   /*  let message
    if(this.state.isLoggedIn){
       message=<div><h1>Welcome Divya</h1> </div>
        
    }
    else{
       message=<div><h1>Welcome Guest</h1></div>
        
    } 
    return message */

    //3rd way
   /*  if(10==5 & console.log("yes")){
        console.log("no");
    }

    return(this.state.isLoggedIn?   
        <div>
            <h1>Welcome Guest</h1>
        </div>
     : 
        <div>
            <h1>Welcome Guest</h1>
        </div>
    ) */

    //4th way

    return(
        this.state.isLoggedIn && <div><h1>Welcome Divya</h1></div>
    )
  }
}

export default ConditionalRendering