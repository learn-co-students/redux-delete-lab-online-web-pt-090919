import React, { Component } from 'react';

class Band extends Component {
  handleClick = () => {
    console.log('Click');
    this.props.deleteBand(this.props.band.id);
  };

  render() {
    return (
      <div>
        <li>
          {this.props.band.name}
          {console.log(this.props)}
          <button onClick={this.handleClick}>DELETE</button>
        </li>
      </div>
    );
  }
}

export default Band;