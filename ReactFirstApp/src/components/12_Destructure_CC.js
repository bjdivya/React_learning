import React, { Component } from 'react'

class DestructureClass extends Component{
    render(){
        const {name}=this.props;
        return(<div>
            <h1>"Watasiwa {name} desuka"</h1>
        </div>);
    }
}

export default DestructureClass