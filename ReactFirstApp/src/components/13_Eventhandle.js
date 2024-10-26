import React, { Component } from 'react'

class Click extends Component {
  constructor(){
    super();
    this.state={
      message:'Do You Love Me?',
    }
  }

  love=()=>{
     let value=Math.round(Math.random());
     console.log(value);
     if(value===0){
      this.setState({
        message:'Yes, I love you💜',
      });
    }else{
      this.setState({
        message:`Sorry, Can't love you☹`,
      });
    }

  }

  render(){
  return (
    <div>
      <h1>{this.state.message}</h1>
      <button onClick={this.love}>Click Me</button>
    </div>
  )
}
}

export default  Click