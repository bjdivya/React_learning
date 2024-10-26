import React, { Component } from 'react'
import Child from './childrenComponent'

export class ParentComponent extends Component {
    constructor(props){
        super(props);
        this.state={
              parentName:['Divya','Nivya','Shantha','Jennie','Sushma','Mani'],
              greet:''
           }
   }
   greet=(child)=>{
     let number=Math.floor(Math.random()*this.state.parentName.length);
     console.log(number);
    this.setState({
        greet:`Namaste ${this.state.parentName[number]} amma, I LOVE YOU💜 from your child ${child}`,
    });
   }

  render() {
    return (
      <div>
        <h1>{this.state.greet}</h1>
        <Child greetFunction={this.greet}></Child>
      </div>
    )
  }
}

export default ParentComponent