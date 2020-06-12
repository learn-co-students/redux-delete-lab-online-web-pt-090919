import React, { Component } from 'react';
import {connect} from 'react-redux';

class Band extends Component {

  render() {
    return(
      <div>
        Band Component
        <span>{this.props.bands}</span>
        <button onClick={() => this.props.delete(this.props.todo.id)}>DELETE</button>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {delete: band => dispatch({type: 'DELETE_BAND', payload: band})}
}

export default Band;
