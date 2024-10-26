
import React from 'react'

class Click1 extends React.Component {
    constructor(){
      super();
      this.state={
        message:'Do You Love Me?',
      }

      //binding in constructor
      this.love=this.love.bind(this)
    }
    //bindind arrow function as class component love=()=>{}
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
    
    //normal function
    /* love(){
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
  
    } */
  
    render(){
        //1.binding in render method using bind() <button onClick={this.love.bind(this)}>Click Me</button>
        //2. arrow function approach in render method  <button onClick={()=>this.love()}>Click Me</button>
        //3.Binding in constructor(important one)  this.love=this.love.bind(this)
        //4.arrow function as class component(most import)
    return (
      <div>
        <h1>{this.state.message}</h1>
       <button onClick={this.love}>Click Me</button>
      </div>
    )
  }
  }
  
  export default  Click1