import React, { Component } from 'react'

class Bts extends Component{
    render(){
        return <h3 style={{color:'purple',fontFamily:'cursive'}}>This is {this.props.name}, i'm a {this.props.position}{this.props.emoji}</h3>
    }
}

export default Bts 