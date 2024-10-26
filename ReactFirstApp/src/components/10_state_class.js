//

import React, { Component } from 'react'

class Message extends Component{

     constructor(){
        super()
        this.state={
            message1:'Welcome Vistors',    
        }  
     }
     onChange(){
        this.setState({
            message1:'Thank you',
        });
     }
    render(){
        return (
        <div>
        <h1>{this.state.message1}</h1>
        <button onClick={()=>this.onChange()}>Subscribe</button>
        </div>)
    }

    }
     
export default Message