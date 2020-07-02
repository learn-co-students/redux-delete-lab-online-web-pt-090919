import React, { Component } from 'react';

class Band extends Component {

  
 
  render() { 
    debugger
    return(
      
        <li>{this.props.band.name} 
        <button onClick={()=>this.props.delete()}>delete</button>
        </li>
      
    );
  }
};

export default Band;
